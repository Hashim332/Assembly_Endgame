import LanguageChip from "./LanguageChip";
import { languages } from "../languages";

export default function ChipGroup() {
  const languageChips = languages.map((chip) => {
    return (
      <LanguageChip
        name={chip.name}
        colour={chip.color}
        backgroundColour={chip.backgroundColor}
      />
    );
  });

  return <div className="chips-container">{languageChips}</div>;
}
