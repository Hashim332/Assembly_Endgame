import LanguageChip from "./LanguageChip";
import { languages } from "../languages";
import { clsx } from "clsx";

export default function ChipGroup({ wrongGuessCount }) {
  const languageChips = languages.map((chip, index) => {
    const className = clsx("language-chip", {
      lost: wrongGuessCount && index < wrongGuessCount,
    });

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
