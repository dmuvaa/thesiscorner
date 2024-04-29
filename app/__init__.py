from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_cors import CORS
from dotenv import load_dotenv
import os

db = SQLAlchemy()
login_manager = LoginManager()

def create_app():
    load_dotenv()
    app = Flask(__name__)
    
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')

    db.init_app(app)
    login_manager.init_app(app)

    with app.app_context():
		db.create_all()

    login_manager.login_view = 'views.login'

    @login_manager.user_loader
    def load_user(user_id):
        from app.models import User
        return User.query.get(int(user_id))

    from .auth import auth as auth_blueprint
    from .auth import routes as auth_routes
    app.register_blueprint(auth_blueprint)


    from .views.routes import views as views_blueprint
    from .views import routes as views_routes
    app.register_blueprint(views_blueprint, url_prefix='/api')

    CORS(app, resources={r"/api/*": {"origins": "*"}})


    return app
