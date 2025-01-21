import React, { useState } from 'react';

const UserCreationForm = () => {
  const [user, setUser] = useState({
    name: '',
    officeCode: '',
    roleCode: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">User Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="officeCode">Office Code:</label>
        <input
          type="text"
          id="officeCode"
          name="officeCode"
          value={user.officeCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="roleCode">Role Code:</label>
        <select
          id="roleCode"
          name="roleCode"
          value={user.roleCode}
          onChange={handleChange}
        >
          <option value="">Select Role Code</option>
          {/* Add options for available role codes */}
          <option value="role1">Role 1</option>
          <option value="role2">Role 2</option>
          {/* ... */}
        </select>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Retype Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          // Add validation for password matching
        />
      </div>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
      <button type="Exit">Exit</button>
    </form>
  );
};

export default UserCreationForm;