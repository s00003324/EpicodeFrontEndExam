import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileForm from '../components/ProfileForm';
import PasswordForm from '../components/PasswordForm';

function UserDashboard() {
  const { list } = useSelector((state) => state.books);
  const user = useSelector((state) => state.auth.user);

  const [readStatus, setReadStatus] = useState(() => {
    if (!user) return {};
    const saved = localStorage.getItem(`readStatus_${user.username}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(`readStatus_${user.username}`, JSON.stringify(readStatus));
    }
  }, [readStatus, user]);

  if (!user) return <p>Please login to see your dashboard.</p>;

  const toggleRead = (title) => {
    setReadStatus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const removeRead = (title) => {
    const updated = { ...readStatus };
    delete updated[title];
    setReadStatus(updated);
  };

  const readBooks = list.filter((book) => readStatus[book.title]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Welcome, {user.username}!</h2>

      <ProfileForm />
      <PasswordForm />

      <div className="book-list-container">
        <h3>Your Read Books</h3>
        {readBooks.length === 0 && <p>You have not marked any books as read.</p>}
        <ul className="book-list">
          {readBooks.map((book) => (
            <li key={book.id} className="book-item">
              <div className="book-info">
                <strong>{book.title}</strong>
                <span className="author">by {book.author}</span>
                {book.description && <p className="summary">{book.description}</p>}
              </div>
              <button className="book-btn" onClick={() => toggleRead(book.title)}>
                Mark Unread
              </button>
              <button className="book-btn delete" onClick={() => removeRead(book.title)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserDashboard;