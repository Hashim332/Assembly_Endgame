import GameStatus from "./components/GameStatus";
import ChipGroup from "./components/ChipGroup";
import { useState } from "react";
import clsx from "clsx";
import { languages } from "./languages";
import { isEqual } from "lodash";
import NewGameButton from "./components/NewGameButton";
/**
 * Goal: Add in the incorrect guesses mechanism to the game
 *
 * Challenge:
 * 1. Create a variable `isGameOver` which evaluates to `true`
 *    if the user has guessed incorrectly 8 times. Consider how
 *    we might make this more dynamic if we were ever to add or
 *    remove languages from the languages array.
 * 2. Conditionally render the New Game button only if the game
 *    is over.
 */

export default function AssemblyEndgame() {
  // State values
  const [currentWord, setCurrentWord] = useState("react");
  const currentWordArray = currentWord.split("");

  const [userGuess, setUserGuess] = useState([]);

  // Derived values
  const wrongGuessCount = userGuess.filter(
    (letter) => !currentWordArray.includes(letter)
  ).length;
  const isGameLost = wrongGuessCount === languages.length - 1;

  const sortedCurrentWord = [...currentWordArray].sort();
  const isGameWon = isEqual(sortedCurrentWord, [...userGuess].sort()); // using lodash helper function to do deep comparision

  const isGameOver = isGameLost || isGameWon;

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

      <GameStatus isGameLost={isGameLost} isGameWon={isGameWon} />

      <ChipGroup wrongGuessCount={wrongGuessCount} />

      <div className="word-container">{word}</div>

      <div className="alphabet-container">{alphabetButtons}</div>

      {isGameOver && <NewGameButton />}
    </main>
  );
}
