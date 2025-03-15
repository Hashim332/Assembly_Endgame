export default function LanguageChip({
  name,
  backgroundColour,
  colour,
  className,
}) {
  const styles = {
    backgroundColor: backgroundColour,
    color: colour,
    position: "relative", // contain the absolute positioning
    overflow: "hidden", // keep the overlay within bounds
  };

  return (
    <p style={styles} className={className}>
      {name}
    </p>
  );
}
