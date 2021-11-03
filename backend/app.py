from flask import Flack, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "app.site")
db = SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app)

class Book(db.Model):
    id = db.Column(db.Interger, primary_key=True
    title = dbColumn(db.String, nullable=False, unique=True))
    aither = db.Column(db.String, nullable=False)
    review = db.Column(db.String(144), nullable=False)
    genre = db.Column(db.String, nullable=True)

    def __init__(self, titlle, author, review, genre):
        self.title = title
        self.author = author
        self.review = review
        self.genre = genre

class BookeSchema(ma.Schema):
    class Meta:
        fields ("id", "title", "author", "review", "genre")
        
book_schema = BookeSchema()
multiple_book_schema = BookSchema(many=True)