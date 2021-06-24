import React from "react";

export default function MyInfo({ currentUser, allVacations }) {
  // console.log(currentUser);
  // console.log(allVacations);
  const displayedVacations = allVacations?.filter(
    (vac) => vac.userId === currentUser?.id
  );
  return (
    <>
      <div>
        {currentUser ? `Hello, ${currentUser.userName}.` : `Please Log In.`}
      </div>
      <ul>
        {displayedVacations?.map((vac) => (
          <li key={vac.id}>{vac.city}</li>
        ))}
      </ul>
    </>
  );
}
