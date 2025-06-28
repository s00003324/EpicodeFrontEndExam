import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetail() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.list.find((b) => b.id === parseInt(id))
  );

  if (!book) return <p>Book not found.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
    </div>
  );
}

export default BookDetail;