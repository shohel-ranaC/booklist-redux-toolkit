import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';


const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const numberOfBooks = useSelector((state)=> state.booksReducer.books.length)

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const book = {id: numberOfBooks + 1, title, author};
        dispatch(addBook(book));
        navigate('/show-books', {replace: true});
    };
    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Book title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                     />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Book author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                     />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;