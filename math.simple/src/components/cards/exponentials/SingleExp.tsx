import "../../../styles/Intermediates.css"

export function SingleExponential({ handleSelectedCard, selectedCard }: {handleSelectedCard: (selected: string) => void, selectedCard: string | null}) {
  const exponents = [1, 2, 3, 4, 5];
  const selected = "single"

  return (
    <div className={`${selectedCard === "single" ?("card-selected") :("")} card`} onClick={()=>{handleSelectedCard(selected)}}>
        <h4>Practice</h4>
        <h3 className="subtitle">Only 1 exponent</h3>
      <article className="buttons-container">
        {exponents.map((exponent) => (
          <button key={exponent}>
            x<sup>{exponent}</sup>
          </button>
        ))}
      </article>
    </div>
  );
}
