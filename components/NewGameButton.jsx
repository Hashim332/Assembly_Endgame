export default function NewGameButton({ startNewGame }) {
  return (
    <button onClick={() => startNewGame()} className="new-game">
      New Game
    </button>
  );
}
