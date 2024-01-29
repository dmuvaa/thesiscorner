from . import db
from flask_login import UserMixin
from datetime import datetime

# User model
class User(UserMixin, db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')
    password = db.Column(db.String(60), nullable=False)
    orders = db.relationship('Order', backref='author', lazy=True)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"

# Order model
class Order(db.Model):
    __tablename__ = 'orders'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    deadline = db.Column(db.DateTime, nullable=False)
    word_count = db.Column(db.Integer)
    price = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(20), nullable=False, default='Pending')

    def __repr__(self):
        return f"Order('{self.title}', '{self.date_posted}')"

# OrderStatus model (optional)
class OrderStatus(db.Model):
    
    __tablename__ = 'order_statuses'
    id = db.Column(db.Integer, primary_key=True)
    status_name = db.Column(db.String(50), nullable=False)
    orders = db.relationship('Order', backref='order_status', lazy=True)

    def __repr__(self):
        return f"OrderStatus('{self.status_name}')"
