import { useState } from "react";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { ExactDivisions } from "../../components/cards/division/ExactDivisions";
import { IntegerDivisions } from "../../components/cards/division/IntegerDivisions";

export function DivisionIntermediate() {
  const navigate = useNavigate()

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleSelectedCard = (selected: string): void => {
    setSelectedCard(selected);
  };


  const handleNextClick = () => {
    if (selectedCard === "exact") {
      navigate(`/div/${selectedCard}`);
    } else if (selectedCard === "integer") {
      navigate(`/div/${selectedCard}`);
    }
  };

  return (
    <section className="relative">
      <Title />
      <div className="container">
        <h2 className="subtitle">What do you want to practice</h2>
        <article className="cards-container">
          <ExactDivisions
            handleSelectedCard={handleSelectedCard}
            selectedCard={selectedCard}
          />
          <IntegerDivisions
            handleSelectedCard={handleSelectedCard}
            selectedCard={selectedCard}
          />
        </article>
      </div>
      {selectedCard ? (
        <button onClick={handleNextClick} className="next-button">Next</button>
      ) : (
        <button className="next-button disabled" disabled>
          Next
        </button>
      )}
    </section>
  );
}
