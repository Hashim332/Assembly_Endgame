export default function LanguageChip({ name, backgroundColour, colour }) {
  const styles = {
    backgroundColor: backgroundColour,
    color: colour,
  };

  return (
    <p style={styles} className="language-chip">
      {name}
    </p>
  );
}
