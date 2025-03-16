export default function GameStatus({ isGameLost, isGameWon }) {
  /**
   * Goal: Add in the incorrect guesses mechanism to the game
   *
   * Challenge:
   * Conditionally render either the "won" or "lost" statuses
   * from the design, both the text and the styles, based on the
   * new derived variables.
   *
   * Note: We always want the surrounding `section` to be rendered,
   * so only change the content inside that section. Otherwise the
   * content on the page would jump around a bit too much.
   */

  // function evaluateStatus() {
  //   if (isGameWon) {
  //     return (
  //       <section className="game-status game-won">
  //         <h2>You win!</h2>
  //         <p>Well done! 🎉</p>
  //       </section>
  //     );
  //   } else if (isGameLost) {
  //     return (
  //       <section className="game-status game-lost">
  //         <h2>Game over!</h2>
  //         <p>You lose! Better start learning Assembly 😭</p>
  //       </section>
  //     );
  //   }
  // }

  return (
    <div>
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
