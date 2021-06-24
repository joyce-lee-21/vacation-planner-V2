import React, { useState } from "react";

export default function MyInfo({ currentUser, allVacations }) {
  const [showPassword, toggleShowPassWord] = useState(false);

  console.log(currentUser);
  console.log(allVacations);
  function handleShowPasswordClick() {
    toggleShowPassWord(!showPassword);
  }
  const displayedVacations = allVacations?.filter(
    (vac) => vac.userId === currentUser?.id
  );
  return (
    <>
      <div>
        {currentUser ? `Hello, ${currentUser.userName}.` : `Please Log In.`}
      </div>
      {currentUser && <h3>Vacations Saved</h3>}
      <ul>
        {displayedVacations?.map((vac) => (
          <li key={vac.id}>{vac.city}</li>
        ))}
      </ul>
      <ul>
        {currentUser && (
          <div key={currentUser.id}>
            <li>First Name: {currentUser.firstName ?? "Anonymous"}</li>
            <li>Last Name: {currentUser.lastName ?? "Anonymous"}</li>
            <li>Username: {currentUser.userName}</li>
            <button onClick={handleShowPasswordClick}>
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
            {showPassword && <div>Password: {currentUser.password} </div>}
          </div>
        )}
      </ul>
    </>
  );
}
