import GameStatus from "./components/GameStatus";
import ChipGroup from "./components/ChipGroup";
import { useState } from "react";
import clsx from "clsx";
import { languages } from "./languages";
import { isEqual, last } from "lodash";
import NewGameButton from "./components/NewGameButton";
import { getWord } from "./utils";

export default function AssemblyEndgame() {
  // State values
  const [currentWord, setCurrentWord] = useState(getWord());
  const currentWordArray = currentWord.split("");
  const sortedCurrentWord = [...currentWordArray].sort();

  const [userGuess, setUserGuess] = useState([]);

  // Derived values
  const wrongGuessCount = userGuess.filter(
    (letter) => !currentWordArray.includes(letter)
  ).length;

  const lastGuessedLetter = userGuess[userGuess.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const isGameLost = wrongGuessCount === languages.length - 1;
  const isSubset = (smallArr, largeArr) => {
    const largeSet = new Set(largeArr);
    return smallArr.every((char) => largeSet.has(char));
  };

  const isGameWon =
    isEqual(sortedCurrentWord, [...userGuess].sort()) ||
    isSubset(sortedCurrentWord, userGuess);

  const isGameOver = isGameWon || isGameLost;

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
        disabled={isGameOver}
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

      <GameStatus
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        isGameOver={isGameOver}
        wrongGuessCount={wrongGuessCount}
        isLastGuessIncorrect={isLastGuessIncorrect}
      />

      <ChipGroup wrongGuessCount={wrongGuessCount} />

      <div className="word-container">{word}</div>

      <div className="alphabet-container">{alphabetButtons}</div>

      {isGameOver && <NewGameButton />}
    </main>
  );
}
