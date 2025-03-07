import GameStatus from "./components/GameStatus";
import ChipGroup from "./components/ChipGroup";
import { useState } from "react";

/**
 * Goal: Build out the main parts of our app
 *
 * Challenge:
 * Display the keyboard ⌨️. Use <button>s for each letter
 * since it'll need to be clickable and tab-accessible.
 */

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react");
  const currentWordArray = currentWord.split("");

  const word = currentWordArray.map((letter) => {
    return <span className="letter">{letter.toUpperCase()}</span>;
  });

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      <GameStatus />

      <ChipGroup />

      <div className="word-container">{word}</div>
    </main>
  );
}
