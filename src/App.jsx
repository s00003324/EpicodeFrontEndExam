import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
import NotFound from './pages/NotFound';

function App() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectedFromLogin =
      document.referrer.includes('/login') && window.location.pathname === '/';

    if (user && redirectedFromLogin) {
      if (user.role === 'admin') {
        navigate('/dashboard');
      } else if (user.role === 'user') {
        navigate('/user-dashboard');
      }
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />

        {user?.role === 'admin' && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/books/new" element={<AddBook />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
          </>
        )}

        {user?.role === 'user' && (
          <>
            <Route path="/user-dashboard" element={<UserDashboard />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;