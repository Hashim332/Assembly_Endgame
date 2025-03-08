import LanguageChip from "./LanguageChip";
import { languages } from "../languages";

export default function ChipGroup() {
  const languageChips = languages.map((chip, index) => {
    return (
      <LanguageChip
        key={index}
        name={chip.name}
        colour={chip.color}
        backgroundColour={chip.backgroundColor}
      />
    );
  });

  return <div className="chips-container">{languageChips}</div>;
}
