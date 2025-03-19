import { get } from "lodash";
import { languages } from "../languages";
import { getFarewellText } from "../utils";

export default function GameStatus({
  isGameLost,
  isGameWon,
  isGameOver,
  wrongGuessCount,
}) {
  /**
   * Challenge: Bid farewell to each programming language
   * as it gets erased from existance 👋😭
   *
   * Use the `getFarewellText` function from the new utils.js
   * file to generate the text.
   *
   * Check hint.md if you're feeling stuck, but do your best
   * to solve the challenge without the hint! 🕵️
   */

  let statusMessage = "";
  for (const [index, language] of languages.entries()) {
    if (wrongGuessCount && index === wrongGuessCount) {
      statusMessage = getFarewellText(language.name);
    }
  }

  console.log(wrongGuessCount, statusMessage);

  return (
    <div className="status-container">
      {!isGameOver && (
        <section className="game-status">{statusMessage}</section>
      )}
      {isGameWon && (
        <section className="game-status game-won">
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </section>
      )}
      {isGameLost && (
        <section className="game-status game-lost">
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </section>
      )}
    </div>
  );
}
