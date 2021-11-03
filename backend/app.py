from flask import Flask, request, jsonify
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
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False, unique=True)
    aither = db.Column(db.String, nullable=False)
    review = db.Column(db.String(144), nullable=False)
    genre = db.Column(db.String, nullable=True)

    def __init__(self, titlle, author, review, genre):
        self.title = title
        self.author = author
        self.review = review
        self.genre = genre

class BookSchema(ma.Schema):
    class Meta:
        fields = ("id", "title", "author", "review", "genre")

book_schema = BookSchema()
multiple_book_schema = BookSchema(many=True)

@app.route("/book/add", methods=["POST"])
def add_book():
    if  request.content_type != "application/json":
        return jsonify('Error: Data must be JSON')

    post_data = request.get_json()
    title = post_data.get('title')
    author = post_data.get('author')
    review = post_data.get('review')
    genre = post_data.get('genre')

    if title == None:
        return jsonify("Error: Data must have a 'Title' key.")

    if author == None:
        return jsonify("Error: Data must hve an 'Author' key.")

    new_book = Book(title, author, review, genre)
    db.session.add(new_book)
    db.session.commit()

    return jsonify("Book Successfully Added")

if __name__ == "__main__":
    app.run(debug=True)