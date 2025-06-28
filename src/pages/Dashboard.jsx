import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../redux/bookSlice';
import '../styles/style.css';

function Dashboard() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.books);
  const user = useSelector((state) => state.auth.user);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      dispatch(deleteBook(id));
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Welcome, {user?.username || 'Admin'}!</h2>
      <div className="book-list-container">
        <p>Total Books: {list.length}</p>
        <ul className="book-list">
          {list.map((book) => (
            <li key={book.id} className="book-item">
              <div className="book-info">
                <strong>{book.title}</strong>
                <span className="author">by {book.author}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link to={`/books/edit/${book.id}`} className="book-btn">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="book-btn delete"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;