import { useState } from "react";
import "../../../styles/Intermediates.css";

export function ToggleExponential({ handleSelectedCard, selectedCard }: {handleSelectedCard: (selected: string) => void, selectedCard: string | null}) {
  const exponents = [1, 2, 3, 4, 5];
  const [userExponents, setUserExponents] = useState<number[]>([]);
   const selected = "toggle"

  const handleToggle = (exponent: number) => {
    setUserExponents((prevExponents) => {
      if (prevExponents.includes(exponent)) {
        return prevExponents.filter((exp) => exp !== exponent);
      } else {
        return [...prevExponents, exponent];
      }
    });
  };

  return (
    <div  className={`${selectedCard === "toggle" ?("card-selected") :("")} card`} onClick={()=>{handleSelectedCard(selected)}}>
      <h4>Practice</h4>
      <h3 className="subtitle">Multiple exponents</h3>
      <article className="buttons-container">
        {exponents.map((exponent) => (
          <button
            key={exponent}
            className={`${
              userExponents.includes(exponent) ? "isSelected" : ""
            }`}
            onClick={() => handleToggle(exponent)}
          >
            x<sup>{exponent}</sup>
          </button>
        ))}
      </article>
      <span>(select 2 or more)</span>
    </div>
  );
}
