import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ProfileForm() {
  const user = useSelector((state) => state.auth.user);
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated (mock)');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Profile</h3>

      <label>Username:</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} required />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Profile Image:</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt="Preview" style={{ width: 100, height: 100, borderRadius: '50%' }} />}

      <button type="submit">Save Changes</button>
    </form>
  );
}