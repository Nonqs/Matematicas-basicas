import { useState } from "react";
import { SingleExponential } from "../../components/cards/exponentials/SingleExp";
import { ToggleExponential } from "../../components/cards/exponentials/ToggleExp";
import { Title } from "../../components/Title";

export function ExponentialIntermediate() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleSelectedCard = (selected: string): void =>{

    setSelectedCard(selected)
    
  }

  return (
    <section className="relative">
      <Title />
      <div className="container">
        <h2 className="subtitle">What do you want to practice</h2>
        <article className="cards-container">
          <SingleExponential handleSelectedCard={handleSelectedCard} selectedCard={selectedCard}/>
          <ToggleExponential handleSelectedCard={handleSelectedCard} selectedCard={selectedCard}/>
        </article>
      </div>
      <button className="next-button">Next</button>
    </section>
  );
}
