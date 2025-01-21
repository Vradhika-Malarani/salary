import React, { useState } from 'react';

function UserRolesForm() {
  const [selectedOption, setSelectedOption] = useState('');
  const [userRoles, setUserRoles] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddRole = () => {
    if (selectedOption) {
      setUserRoles([...userRoles, selectedOption]);
      setSelectedOption('');
    }
  };

  const handleRemoveRole = (index) => {
    const updatedRoles = [...userRoles];
    updatedRoles.splice(index, 1);
    setUserRoles(updatedRoles);
  };

  return (
    <div>
      <h2>User Roles</h2>
      <div>
        <label htmlFor="role-select">Select Role:</label>
        <select id="role-select" value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select Option</option>
          {/* Add actual role options here */}
          <option value="role1">Role 1</option>
          <option value="role2">Role 2</option>
          <option value="role3">Role 3</option>
        </select>
        <button onClick={handleAddRole}>Add</button>
      </div>
      <div>
        <h3>...............................................................</h3>
        <label htmlFor="role-select">Description:</label>
        <input
          type="text">
        </input>
        
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          <button type="Exit">Exit</button>
        </div>
        
        
        <ul>
          {userRoles.map((role, index) => (
            <li key={index}>
              {role}
              <button onClick={() => handleRemoveRole(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserRolesForm;