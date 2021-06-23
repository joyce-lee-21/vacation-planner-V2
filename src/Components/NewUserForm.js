import React, { useState } from "react";

const USERS_API = "http://localhost:3000/users";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const MIN_PASSWORD_LENGTH = 6;

export default function NewUserForm({
  onIsUserNameAvailable,
  onAddUser,
  onHideNewUserForm
}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [favoriteCity, setFavoriteCity] = useState("");

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleReEnterPasswordChange(event) {
    setReEnterPassword(event.target.value);
  }

  function handleFavoriteCityChange(event) {
    setFavoriteCity(event.target.value);
  }

  function validatePassword() {
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    const symbolRegex = /\W/;
    let isLongEnough = password.length >= MIN_PASSWORD_LENGTH;
    let hasALowerCaseLetter = lowerCaseRegex.test(password);
    let hasAnUpperCaseLetter = upperCaseRegex.test(password);
    let hasADigit = digitRegex.test(password);
    let hasASymbol = symbolRegex.test(password);
    return (
      isLongEnough &&
      hasALowerCaseLetter &&
      hasAnUpperCaseLetter &&
      hasADigit &&
      hasASymbol
    );
  }

  function sendNewUserToDB(event) {
    fetch(USERS_API, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        userName: userName,
        password: password,
        favoriteCity: favoriteCity
      })
    })
      .then((response) => response.json())
      .then((newUser) => onAddUser(newUser));
    alert("New user added");
    onHideNewUserForm();
  }

  function handleNewUserSubmit(event) {
    event.preventDefault();
    onIsUserNameAvailable(userName)
      ? sendNewUserToDB(event)
      : alert("Username already taken. Please choose a different username.");
  }
  let arePasswordsMatching = password === reEnterPassword;
  let isPasswordValid = validatePassword();

  return (
    <div>
      <form onSubmit={handleNewUserSubmit}>
        <div>User Name</div>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleUserNameChange}
        />
        <div>Password</div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <div>Re-enter Password</div>
        <input
          type="password"
          name="reEnterPassword"
          value={reEnterPassword}
          onChange={handleReEnterPasswordChange}
        />
        <br />
        <div>What is your favorite city?</div>
        <input
          type="text"
          name="favoriteCity"
          value={favoriteCity}
          onChange={handleFavoriteCityChange}
        />
        {arePasswordsMatching && isPasswordValid && (
          <button type="submit">Submit</button>
        )}
        {!isPasswordValid && (
          <div>
            Please enter a stronger password. Passwords must be at least{" "}
            {MIN_PASSWORD_LENGTH} characters long and must include an uppercase
            letter, lowercase letter, digit, and special character such as *{" "}
          </div>
        )}
        {!arePasswordsMatching && <div>Passwords do not match!</div>}
      </form>
    </div>
  );
}
