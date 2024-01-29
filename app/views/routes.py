from flask import render_template, url_for, flash, redirect, request, Blueprint
from flask_login import login_user, current_user, logout_user, login_required
from . import views
from app import db
from app.models import User, Order
from .forms import RegistrationForm, LoginForm, OrderForm  # You need to create these form classes

app = Blueprint('app', __name__)

# Home Route
@views.route('/')
@views.route('/home')
def home():
    return render_template('index.html')

# Registration Route
@views.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('views.home'))
    form = RegistrationForm()
    if form.validate_on_submit():
        # Add user registration logic here
        flash('Your account has been created!', 'success')
        return redirect(url_for('views.login'))
    return render_template('register.html', title='Register', form=form)

# Login Route
@views.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('views.home'))
    form = LoginForm()
    if form.validate_on_submit():
        # User login logic here
        flash('You have been logged in!', 'success')
        return redirect(url_for('views.home'))
    return render_template('login.html', title='Login', form=form)

# Logout Route
@views.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('views.home'))

# New Order Route
@views.route('/order/new', methods=['GET', 'POST'])
@login_required
def new_order():
    form = OrderForm()
    if form.validate_on_submit():
        # Logic for creating a new order
        flash('Your order has been created!', 'success')
        return redirect(url_for('views.user_orders'))
    return render_template('create_order.html', title='New Order', form=form, legend='New Order')

# User Orders Route
@views.route('/user/<string:username>')
@login_required
def user_orders(username):
    # Logic to display orders of the current user
    return render_template('user_orders.html', orders=orders)

# Admin Dashboard Route
@views.route('/admin/dashboard')
@login_required
def admin_dashboard():
    """Admin dashboard logic"""
    return render_template('admin_dashboard.html', orders=orders)

# Order Route
@views.route('/order/<int:order_id>')
@login_required
def order(order_id):
    """Logic to display a specific order"""
    return render_template('order.html', title='Order', order=order)

# Handle Order Completion
@views.route('/order/<int:order_id>/complete', methods=['POST'])
@login_required
def complete_order(order_id):
    # Logic to mark an order as complete
    return redirect(url_for('views.order', order_id=order_id))

# Handle Order Revision
@views.route('/order/<int:order_id>/revision', methods=['POST'])
@login_required
def order_revision(order_id):
    # Logic to mark an order as under revision
    return redirect(url_for('views.order', order_id=order_id))
