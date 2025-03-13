import GameStatus from "./components/GameStatus";
import ChipGroup from "./components/ChipGroup";
import { useState } from "react";
import clsx from "clsx";

/**
 * Goal: Add in the incorrect guesses mechanism to the game
 *
 * Challenge: Derive a variable (`wrongGuessCount`) for the
 * number of incorrect guesses by using the other state
 * values we're already holding in the component.
 *
 * console.log the wrongGuessCount for now
 */

export default function AssemblyEndgame() {
  // State values
  const [currentWord, setCurrentWord] = useState("react");
  const currentWordArray = currentWord.split("");

  const [userGuess, setUserGuess] = useState([]);

  // Derived values
  const wrongGuessCount = userGuess
    .filter((letter) => !currentWordArray.includes(letter))
    .length();
  console.log(wrongGuessCount);

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const word = currentWordArray.map((letter) => {
    return (
      <span className="letter">
        {userGuess.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    );
  });

  const alphabetArray = alphabet.split("");

  const alphabetButtons = alphabetArray.map((alphabet) => {
    const isGuessCorrect = currentWord.includes(alphabet);
    const isLetterGuessed = userGuess.includes(alphabet);
    return (
      <button
        key={alphabet}
        className={clsx("alphabet-buttons", {
          "correct-guess": isGuessCorrect && isLetterGuessed,
          "incorrect-guess": !isGuessCorrect && isLetterGuessed,
        })}
        onClick={() => handleGuess(alphabet)}
      >
        {alphabet}
      </button>
    );
  });

  function handleGuess(letter) {
    if (userGuess.includes(letter)) {
      return;
    }
    setUserGuess([...userGuess, letter]);
    // alernate logic, but causes unnecessary renders
    // setUserGuess((prevGuesses) =>
    //   prevGuesses.includes(letter) ? prevGuesses : [...prevGuesses, letter]
    // );
  }

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

      <div className="alphabet-container">{alphabetButtons}</div>
    </main>
  );
}
