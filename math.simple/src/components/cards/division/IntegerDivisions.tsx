import "../../../styles/Intermediates.css";

export function IntegerDivisions({
  handleSelectedCard,
  selectedCard
}: {
  handleSelectedCard: (selected: string) => void;
  selectedCard: string | null;
}) {
  const selected = "integer";

  return (
    <div
      className={`${selectedCard === "integer" ? "card-selected" : ""} card`}
      onClick={() => {
        handleSelectedCard(selected);
      }}
    >
      <article className="text-container">
      <h4 className="no-margin">Practice</h4>
      <h3 className="subtitle no-margin">Integer Divisions</h3>
      </article>
      <article className="operation">
        <span>46 / 5 = 8.6</span>
      </article>
    </div>
  );
}
