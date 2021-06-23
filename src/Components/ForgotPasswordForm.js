import React, { useState } from "react";

export default function ForgotPasswordForm({ onForgotPasswordSubmit }) {
  const [userName, setUserName] = useState("");
  const [favoriteCity, setFavoriteCity] = useState("");

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handleFavoriteCityChange(event) {
    setFavoriteCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={onForgotPasswordSubmit}>
        <div>User Name</div>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleUserNameChange}
        />
        <div>What is your favorite city?</div>
        <input
          type="password"
          name="favoriteCity"
          value={favoriteCity}
          onChange={handleFavoriteCityChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}