import { get } from "lodash";
import { languages } from "../languages";
import { getFarewellText } from "../utils";

export default function GameStatus({
  isGameLost,
  isGameWon,
  isGameOver,
  wrongGuessCount,
  isLastGuessIncorrect,
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

  return (
    <div className="status-container">
      {!isGameOver && isLastGuessIncorrect && (
        <section className="game-status status-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </section>
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
