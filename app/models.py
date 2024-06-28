from . import db
from flask_login import UserMixin
from datetime import datetime


# User model
class User(UserMixin, db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    orders = db.relationship('Order', backref='author', lazy=True)
    image_file = db.Column(db.String(20),
                           nullable=False, default='default.jpg')

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"


# Order model
class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    essay_details = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False,
                            default=datetime.utcnow)
    due_date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(20), nullable=False, default='pending')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    deadline = db.Column(db.DateTime, nullable=False)
    price = db.Column(db.Float, nullable=False)
    submission = db.Column(db.Text)  # URL or Text for submitted work
    feedback = db.Column(db.Text)

    def __repr__(self):
        return f"Order('{self.title}', '{self.date_posted}')"
