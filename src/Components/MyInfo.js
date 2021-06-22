import React from "react";

export default function MyInfo({ currentUser }) {
  console.log(currentUser);
  return (
    <div>
      {currentUser.userName
        ? `Hello, ${currentUser.userName}.`
        : `Please Log In.`}
    </div>
  );
}
