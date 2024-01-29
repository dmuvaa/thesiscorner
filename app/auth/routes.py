from . import auth
from flask_login import current_user, login_user, logout_user, login_required
from app.views.forms import LoginForm
from flask import render_template

@auth.route('/login')
def login():
    if current_user.is_authenticated:
        return redirect(url_for('main.home'))  # Replace 'main.home' with your home route

    form = LoginForm()
    if form.validate_on_submit():
        # User login logic...
        # If successful, redirect to another page
        return redirect(url_for('main.home'))  # Redirect after successful login
        # If login is not successful, flash a message or take other actions

    # Make sure to return render_template outside (and after) any conditional blocks
    return render_template('login.html', form=form)