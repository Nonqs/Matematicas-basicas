import { useState } from "react";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { SingleRoot } from "../../components/cards/root/SingleRoot";
import { ToggleRoot } from "../../components/cards/root/ToggleRoot";

export function RootIntermediate() {
  const navigate = useNavigate()

  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [userRoots, setUserRoots] = useState<number[]>([]);
  const [userRoot, setUserRoot] = useState<number | null>(null);

  const handleSelectedCard = (selected: string): void => {
    setSelectedCard(selected);
    if (selected === "single") {
      setUserRoots([]);
    } else {
      setUserRoot(null);
    }
  };

  const handleToggleRoot = (exponent: number[]) => {
    setUserRoots(exponent);
  };

  const handleSelectRoot = (exponent: number) => {
    setUserRoot(exponent);
  };

  const handleNextClick = () => {
    if (selectedCard === "single" && userRoot !== null) {
      navigate(`/root/${selectedCard}/${userRoot}`);
    } else if (selectedCard === "toggle" && userRoots.length > 0) {
      const exponents = userRoots.join("-");
      navigate(`/root/${selectedCard}/${exponents}`);
    }
  };

  return (
    <section className="relative">
      <Title />
      <div className="container">
        <h2 className="subtitle">What do you want to practice</h2>
        <article className="cards-container">
          <SingleRoot
            handleSelectedCard={handleSelectedCard}
            selectedCard={selectedCard}
            handleSelectRoot={handleSelectRoot}
            userRoot={userRoot}
          />
          <ToggleRoot
            handleSelectedCard={handleSelectedCard}
            selectedCard={selectedCard}
            handleToggleRoot={handleToggleRoot}
            userRoots={userRoots}
          />
        </article>
      </div>
      {selectedCard && (userRoot !== null || userRoots.length > 1) ? (
        <button onClick={handleNextClick} className="next-button">Next</button>
      ) : (
        <button className="next-button disabled" disabled>
          Next
        </button>
      )}
    </section>
  );
}
