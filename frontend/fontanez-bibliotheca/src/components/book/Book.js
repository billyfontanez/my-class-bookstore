import React from 'react';

export default function Book(props) {
    const {title, author, review, genre, id} = props.book;

    return (
        <div className="book-container">
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className='genre'>{genre}</div>
            <div className='review'>{review}</div>

            <button className="book-btn" onClick={() => props.handleDeleteClick(id)}>Delete</button>
            <button className="book-btn" onClick={() => props.handleEditClick(props.book)}>Edit</button>
        </div>
    );
}