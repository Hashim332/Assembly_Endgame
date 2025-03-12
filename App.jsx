import GameStatus from "./components/GameStatus";
import ChipGroup from "./components/ChipGroup";
import { useState } from "react";
import clsx from "clsx";

/**
 * Goal: Allow the user to start guessing the letters
 *
 * Challenge: Update the keyboard when a letter is right
 * or wrong.
 *
 * Bonus: use the `clsx` package to easily add conditional
 * classNames to the keys of the keyboard. Check the docs
 * to learn how to use it 📖
 */

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react");
  const currentWordArray = currentWord.split("");

  const [userGuess, setUserGuess] = useState([]);

  const word = currentWordArray.map((letter) => {
    return <span className="letter">{letter.toUpperCase()}</span>;
  });

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
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
