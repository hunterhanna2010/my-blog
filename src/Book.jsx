import React from 'react';

function Book (props) {
    var mappedBooks = props.books.map(books => <li>Title: <h4><i>{books.title}</i></h4>Author: {books.author}</li>)
    return (
        <>
            <hr></hr>
            <h1>Favorite Books:</h1>
            <ul>
            {mappedBooks}
            </ul>
        </>
    )
}


export default Book; 