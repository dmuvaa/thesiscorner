from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField, IntegerField, DateTimeField, BooleanField
from wtforms.validators import DataRequired, Email, Length, EqualTo

# Registration Form
class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password',
                                     validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Sign Up')

# Login Form
class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

# Order Form
class OrderForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    word_count = IntegerField('Word Count', validators=[DataRequired()])
    deadline = DateTimeField('Deadline', format='%Y-%m-%d %H:%M:%S', validators=[DataRequired()])
    submit = SubmitField('Place Order')
