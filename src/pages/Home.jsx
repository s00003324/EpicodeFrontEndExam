import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h2>Welcome to Book Manager</h2>
        <p>Please log in to view and manage your books.</p>
        <Link to="/login" className="home-login-btn">Log In</Link>
      </div>
    </div>
  );
}

export default Home;