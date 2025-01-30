import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  function handlePlusClick() {
    const newPlayer = { ...player, likescore: player.likescore + 1 };
    setPlayer(newPlayer);
  }

  function handleFirstNameChange(e: { target: { value: string; }; }) {
    const newPlayer = { ...player, firstName: e.target.value };
    setPlayer(newPlayer);
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    const newPlayer = { ...player, lastName: e.target.value };
    setPlayer(newPlayer);
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {'  '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
