import React, { useState } from 'react';

function ResetPasswordForm() {
  const [userId, setUserId] = useState('');
  const [newTemporaryPassword, setNewTemporaryPassword] = useState('');
  const [retypeTemporaryPassword, setRetypeTemporaryPassword] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewTemporaryPassword(event.target.value);
  };

  const handleRetypePasswordChange = (event) => {
    setRetypeTemporaryPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({ userId, newTemporaryPassword, retypeTemporaryPassword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={handleUserIdChange}
        />
      </div>
      <div>
        <label htmlFor="newPassword">New Temporary Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newTemporaryPassword}
          onChange={handleNewPasswordChange}
        />
      </div>
      <div>
        <label htmlFor="retypePassword">Retype Temporary Password:</label>
        <input
          type="password"
          id="retypePassword"
          value={retypeTemporaryPassword}
          onChange={handleRetypePasswordChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button type="button">Exit</button>
      </div>
    </form>
  );
}

export default ResetPasswordForm;