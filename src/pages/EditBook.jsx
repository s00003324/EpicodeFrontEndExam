import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = useSelector((state) =>
    state.books.list.find((b) => String(b.id) === id)
  );

  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError('All fields are required.');
      return;
    }
    alert('Book updated (not saved for real)');
    navigate('/books');
  };

  if (!book)
    return (
      <div className="book-list-container">
        <p>Book not found.</p>
      </div>
    );

  return (
    <div className="book-list-container">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={author}
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="book-btn">
          Update
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default EditBook;