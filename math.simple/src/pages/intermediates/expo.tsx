import { useState } from "react";
import { SingleExponential } from "../../components/cards/exponentials/SingleExp";
import { ToggleExponential } from "../../components/cards/exponentials/ToggleExp";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";

export function ExponentialIntermediate() {
  const navigate = useNavigate()

  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [userExponents, setUserExponents] = useState<number[]>([]);
  const [userExponent, setUserExponent] = useState<number | null>(null);

  const handleSelectedCard = (selected: string): void => {
    setSelectedCard(selected);
    if (selected === "single") {
      setUserExponents([]);
    } else {
      setUserExponent(null);
    }
  };

  const handleToggleExponent = (exponent: number) => {
    setUserExponents((prevExponents) => {
      if (prevExponents.includes(exponent)) {
        return prevExponents.filter((exp) => exp !== exponent);
      } else {
        return [...prevExponents, exponent];
      }
    });
  };

  const handleSelectExponent = (exponent: number) => {
    setUserExponent(exponent);
  };

  const handleNextClick = () => {
    if (selectedCard === "single" && userExponent !== null) {
      navigate(`/exp/${selectedCard}/${userExponent}`);
    } else if (selectedCard === "toggle" && userExponents.length > 0) {
      const exponents = userExponents.join("-");
      navigate(`/exp/${selectedCard}/${exponents}`);
    }
  };

  return (
    <section className="relative">
      <Title />
      <div className="container">
        <h2 className="subtitle">What do you want to practice</h2>
        <article className="cards-container">
          <SingleExponential
            handleSelectedCard={handleSelectedCard}
            selectedCard={selectedCard}
            handleSelectExponent={handleSelectExponent}
            userExponent={userExponent}
          />
          <ToggleExponential
            handleSelectedCard={handleSelectedCard}
            selectedCard={selectedCard}
            handleToggleExponent={handleToggleExponent}
            userExponents={userExponents}
          />
        </article>
      </div>
      {selectedCard && (userExponent !== null || userExponents.length > 1) ? (
        <button onClick={handleNextClick} className="next-button">Next</button>
      ) : (
        <button className="next-button disabled" disabled>
          Next
        </button>
      )}
    </section>
  );
}
