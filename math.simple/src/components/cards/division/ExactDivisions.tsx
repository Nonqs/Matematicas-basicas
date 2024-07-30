import "../../../styles/Intermediates.css";

export function ExactDivisions({
  handleSelectedCard,
  selectedCard
}: {
  handleSelectedCard: (selected: string) => void;
  selectedCard: string | null;
  handleSelectExponent: (exponent: number) => void;
  userExponent: number | null;
}) {
  const selected = "exact";

  return (
    <div
      className={`${selectedCard === "exact" ? "card-selected" : ""} card`}
      onClick={() => {
        handleSelectedCard(selected);
      }}
    >
      <article className="text-container">
      <h4 className="no-margin">Practice</h4>
      <h3 className="subtitle no-margin">Exact Divisions</h3>
      </article>
      <article className="operation">
        <span>10 / 5 = 2</span>
      </article>
    </div>
  );
}
