from flask import render_template, url_for, flash, redirect, request, Blueprint, session
from flask_login import login_user, current_user, logout_user, login_required
from . import views
from app import db
from app.models import User, Order
from .forms import RegistrationForm, LoginForm, OrderForm  # You need to create these form classes

app = Blueprint('app', __name__)

@views.route('/')
@views.route('/home')
def home():
    return render_template('index.html')

@views.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('views.home'))
    form = RegistrationForm()
    if form.validate_on_submit():
        # Here, include logic to check if the user is an admin based on form input
        # and set the user role accordingly
        user = User(email=form.email.data, username=form.username.data, is_admin=is_admin)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created!', 'success')
        # Redirect admins to the admin dashboard
        if user.is_admin:
            return redirect(url_for('views.admin_dashboard'))
        return redirect(url_for('views.login'))
    return render_template('register.html', title='Register', form=form)

@views.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('views.dashboard'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.check_password(form.password.data):
            login_user(user, remember=form.remember.data)
            return redirect(url_for('views.dashboard'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html', title='Login', form=form)


# Define user_dashboard route
@views.route('/dashboard')
@login_required
def user_dashboard():
    # Dashboard view logic here
    return render_template('user_dashboard.html')

# Define admin_dashboard route
@views.route('/admin/dashboard')
@login_required
def admin_dashboard():
    # Ensure this route is accessible only by admins
    if not current_user.is_admin:
        return redirect(url_for('views.user_dashboard'))
    return render_template('admin_dashboard.html')

@views.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')


@views.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('views.home'))

@views.route('/order/new', methods=['GET', 'POST'])
@login_required
def new_order():
    form = OrderForm()
    if form.validate_on_submit():
        # Process the form data, create a new order, etc.
        flash('Your order has been created!', 'success')
        return redirect(url_for('views.user_orders'))  # Adjust redirect as necessary
    return render_template('new_order.html', form=form)

@views.route('/user/<string:username>')
@login_required
def user_orders(username):
    # Your logic to retrieve orders for the given username
    orders = []  # Placeholder for actual order retrieval logic
    return render_template('user_orders.html', orders=orders, username=username)

@views.route('/order-form')
def order_form():
    # Check if the data is in localStorage
    if 'price' in request.args:
        # If using GET request and URL parameters
        price = request.args.get('price')
    else:
        # If using Flask session (the data needs to be stored in the session on the backend first)
        price = session.get('calculatedPrice', 0)

    # Pass the stored data to the template
    return render_template('order_form.html', price=price)


# Ensure other routes are protected with @login_required and appropriate redirects
# for unauthenticated users
