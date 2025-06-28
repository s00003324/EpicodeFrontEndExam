import { useState } from 'react';

export default function PasswordForm() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Password changed (mock)');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Change Password</h3>

      <label>Old Password:</label>
      <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />

      <label>New Password:</label>
      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />

      <label>Confirm New Password:</label>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

      <button type="submit">Change Password</button>
    </form>
  );
}