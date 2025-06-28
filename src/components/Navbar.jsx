import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import owl from '../assets/owl_logo.png';
import fox from '../assets/user.jpg';

function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav>
      <div className="logo">
        <img src={owl} alt="Owl Logo" className="owl-logo" />
        <span className="title">Book Manager</span>
      </div>

      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        {user?.role === 'admin' && <Link to="/books/new">Add</Link>}
        {user?.role === 'admin' && <Link to="/dashboard">Dashboard</Link>}
        {user?.role === 'user' && <Link to="/user-dashboard">My Profile</Link>}
      </div>

      <div className="nav-right">
        {!user && (
          <Link to="/login" className="nav-login-btn">
            Login
          </Link>
        )}

        {user && (
          <>
            <button onClick={handleLogout} className="nav-logout-btn">
              Logout
            </button>
            <div className="user-icon-container">
              <img src={fox} alt="User" className="user-icon" />
            </div>
            <span className="user-name">{user.username}</span>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
