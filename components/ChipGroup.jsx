import LanguageChip from "./LanguageChip";
import { languages } from "../languages";
import { clsx } from "clsx";
/**
 * Goal: Add in the incorrect guesses mechanism to the game
 *
 * Challenge: When mapping over the languages, determine how
 * many of them have been "lost" and add the "lost" class if
 * so.
 *
 * Hint: use the wrongGuessCount combined with the index of
 * the item in the array while inside the languages.map code
 */

export default function ChipGroup({ wrongGuessCount }) {
  const languageChips = languages.map((chip, index) => {
    const className = clsx("language-chip", {
      lost: wrongGuessCount && index < wrongGuessCount,
    });
    console.log(wrongGuessCount, index, index < wrongGuessCount, className);
    return (
      <LanguageChip
        key={index}
        name={chip.name}
        colour={chip.color}
        backgroundColour={chip.backgroundColor}
        className={className}
      />
    );
  });

  return <div className="chips-container">{languageChips}</div>;
}
