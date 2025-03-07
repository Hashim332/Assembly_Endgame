import GameStatus from "./components/GameStatus";
import { languages } from "./languages";
import LanguageChip from "./components/LanguageChip";
import ChipGroup from "./components/ChipGroup";

/**
 * Goal: Build out the main parts of our app
 *
 * Challenge:
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline
 *    effect on the box using `border-bottom`.
 */

export default function AssemblyEndgame() {
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
    </main>
  );
}
