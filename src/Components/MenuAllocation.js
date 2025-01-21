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
        <label htmlFor="option">option:</label>
        <select
          id="option"
          name="option"
          value={user.option}
          onChange={handleChange}
        >
          <option value="">select option</option>
          {/* Add options for available role codes */}
          <option value="role1">Role 1</option>
          <option value="role2">Role 2</option>
          {/* ... */}
        </select>
      </div>
      <div>
        <label htmlFor="menu for">Menu for:</label>
        <select
          id="menu for"
          name="menu for"
          value={user.menufor}
          onChange={handleChange}
        >
          <option value=""> Role </option>
          {/* Add options for available role codes */}
          <option value="role1">Role 1</option>
          <option value="role2">Role 2</option>
          {/* ... */}
        </select>
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
        <label htmlFor="mainmenu">Main Menu:</label>
        <select
          id="mainmenu"
          name="mainmenu"
          value={user.mainmenu}
          onChange={handleChange}
        >
          <option value="">select\\\\\\\\\\\</option>
          {/* Add options for available role codes */}
          <option value="role1">Role 1</option>
          <option value="role2">Role 2</option>
          {/* ... */}
        </select>
      </div>
      
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
      <button type="Exit">Exit</button>
    </form>
  );
};

export default UserCreationForm;