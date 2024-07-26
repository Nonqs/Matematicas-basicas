import "../../../styles/Intermediates.css";

export function SingleExponential({
  handleSelectedCard,
  selectedCard,
  handleSelectExponent,
  userExponent,
}: {
  handleSelectedCard: (selected: string) => void;
  selectedCard: string | null;
  handleSelectExponent: (exponent: number) => void;
  userExponent: number | null;
}) {
  const exponents = [1, 2, 3, 4, 5];
  const selected = "single";

  return (
    <div
      className={`${selectedCard === "single" ? "card-selected" : ""} card`}
      onClick={() => {
        handleSelectedCard(selected);
      }}
    >
      <h4>Practice</h4>
      <h3 className="subtitle">Only 1 exponent</h3>
      <article className="buttons-container">
        {exponents.map((exponent) => (
          <button
            className={`${
              userExponent === exponent ? "isSelected" : ""
            }`}
            key={exponent}
            onClick={() => {
              handleSelectExponent(exponent);
            }}
          >
            x<sup>{exponent}</sup>
          </button>
        ))}
      </article>
    </div>
  );
}
