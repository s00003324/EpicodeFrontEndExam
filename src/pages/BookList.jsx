import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/bookSlice';
import '../styles/style.css'; 

function BookList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.books);
  const user = useSelector((state) => state.auth.user);
  const [search, setSearch] = useState('');
  const [readStatus, setReadStatus] = useState({});

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const filteredBooks = list.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleRead = (title) => {
    setReadStatus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const getImagePaths = (title) => {
    const fileName = title.toLowerCase().replace(/[^a-z0-9]/g, '');
    return {
      jpg: `/assets/${fileName}.jpg`,
      png: `/assets/${fileName}.png`,
    };
  };

  return (
    <div className="book-list-container">
      <h2 className="book-list-title">Book List</h2>

      <input
        type="text"
        placeholder="Search by title"
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading books...</p>}
      {error && <p>{error}</p>}

      <ul className="book-list">
        {filteredBooks.map((book, index) => {
          const imgPaths = getImagePaths(book.title);
          return (
            <li key={index} className="book-item">
              <img
                src={imgPaths.jpg}
                alt={book.title}
                className="book-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = imgPaths.png;
                }}
              />
              <div className="book-info">
                <strong>{book.title}</strong>
                <span className="author">– {book.author}</span>

                {user && user.role !== 'admin' && (
                  <button
                    className="book-btn"
                    onClick={() => toggleRead(book.title)}
                  >
                    {readStatus[book.title] ? 'Mark Unread' : 'Mark Read'}
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookList;
