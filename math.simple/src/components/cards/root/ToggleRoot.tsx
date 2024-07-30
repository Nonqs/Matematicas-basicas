import { useState } from "react";
import "../../../styles/Intermediates.css";
import { MathJax } from "better-react-mathjax";

export function ToggleRoot({
  handleSelectedCard,
  selectedCard,
  handleToggleRoot,
  userRoots,
}: {
  handleSelectedCard: (selected: string) => void;
  selectedCard: string | null;
  handleToggleRoot: (root: number[]) => void;
  userRoots: number[];
}) {
  const roots = [2, 3];
  const selected = "toggle";

  return (
    <div
      className={`${selectedCard === "toggle" ? "card-selected" : ""} card`}
      onClick={() => {
        handleSelectedCard(selected);
        handleToggleRoot([2,3])
      }}
    >
      <article className="text-container">
        <h4 className="no-margin">Practice</h4>
        <h3 className="subtitle no-margin">Practice multiple Root Types</h3>
      </article>
      <article className="buttons-container">
        {roots.map((root) => (
          <button
            key={root}
            className={`${
              userRoots.includes(root) ? "isSelected" : ""
            }`}
          >
            <MathJax>{`\\( \\sqrt[${root}]{x} \\)`}</MathJax>
          </button>
        ))}
      </article>
    </div>
  );
}
