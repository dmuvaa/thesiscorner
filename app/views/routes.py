from flask import Blueprint, jsonify, request, make_response, current_app
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from functools import wraps
from .. import db
from ..models import User, Order

views = Blueprint('views', __name__)


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('x-access-token')
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            data = jwt.decode(
                token, current_app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = User.query.get(data['user_id'])
        except Exception as ex:
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(current_user, *args, **kwargs)
    return decorated


@views.route('/', methods=['GET'])
def home():
    return jsonify({'Message': 'Welcome to Thesiscorner'}), 200


@views.route('/users/signup', methods=['POST'])
def signup_user():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'])
    new_user = User(username=data['username'],
                    email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'Registered successfully!'}), 201


@views.route('/users/login', methods=['POST'])
def login_user():
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify',
                             401,
                             {'WWW-Authenticate':
                              'Basic realm="Login required!"'})
    user = User.query.filter_by(username=auth.username).first()
    if not user or not check_password_hash(user.password, auth.password):
        return make_response('Could not verify', 401,
                             {'WWW-Authenticate':
                              'Basic realm="Login required!"'})
    token = jwt.encode({'user_id': user.id, 'exp': datetime.datetime.utcnow(
    ) + datetime.timedelta(hours=1)}, current_app.config['SECRET_KEY'])
    return jsonify({'token': token})


@views.route('/users/<username>', methods=['GET'])
@token_required
def get_user(current_user, username):
    if current_user.username != username and not current_user.is_admin:
        return jsonify({'message': 'Unauthorized'}), 403

    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404

    user_data = {
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'image_file': user.image_file
    }

    return jsonify(user_data), 200


@views.route('/orders', methods=['POST'])
@token_required
def create_order(current_user):
    data = request.get_json()
    new_order = Order(essay_details=data['essayDetails'],
                      due_date=data['dueDate'], user_id=current_user.id)
    db.session.add(new_order)
    db.session.commit()
    return jsonify({'message': 'Order placed successfully!'}), 201


@views.route('/orders', methods=['GET'])
@token_required
def get_orders(current_user):
    if current_user.id != 1:
        return jsonify({'message': 'Unauthorized'}), 401
    orders = Order.query.all()
    return jsonify([{
        'id': order.id,
        'essay_details': order.essay_details,
        'due_date': order.due_date,
        'status': order.status,
        'user_id': order.user_id
    } for order in orders]), 200


@views.route('/orders/<int:order_id>/submit', methods=['PUT'])
@token_required
def submit_work(current_user, order_id):
    order = Order.query.get_or_404(order_id)
    if order.user_id != current_user.id:
        return jsonify({'message': 'Unauthorized'}), 403
    data = request.get_json()
    order.submission = data['submission']
    order.status = 'submitted'
    db.session.commit()
    return jsonify({'message': 'Order submitted successfully'}), 200


@views.route('/orders/<int:order_id>/revision', methods=['PUT'])
@token_required
def request_revision(current_user, order_id):
    order = Order.query.get_or_404(order_id)
    if order.user_id != current_user.id:
        return jsonify({'message': 'Unauthorized'}), 403
    data = request.get_json()
    order.feedback = data['feedback']
    order.status = 'revision requested'
    db.session.commit()
    return jsonify({'message': 'Revision requested successfully'}), 200


@views.route('/orders/<int:order_id>/accept', methods=['PUT'])
@token_required
def accept_work(current_user, order_id):
    order = Order.query.get_or_404(order_id)
    if order.user_id != current_user.id:
        return jsonify({'message': 'Unauthorized'}), 403
    order.status = 'completed'
    db.session.commit()
    return jsonify({'message': 'Order completed successfully'}), 200
