import { MathJax } from "better-react-mathjax";
import "../../../styles/Intermediates.css";

export function SingleRoot({
  handleSelectedCard,
  selectedCard,
  handleSelectRoot,
  userRoot,
}: {
  handleSelectedCard: (selected: string) => void;
  selectedCard: string | null;
  handleSelectRoot: (root: number) => void;
  userRoot: number | null;
}) {
  const roots = [2, 3];
  const selected = "single";

  return (
    <div
      className={`${selectedCard === "single" ? "card-selected" : ""} card`}
      onClick={() => {
        handleSelectedCard(selected);
      }}
    >
      <article className="text-container">
      <h4 className="no-margin">Practice</h4>
      <h3 className="subtitle no-margin">Practice a Single Root Type</h3>
      </article>
      <article className="buttons-container">
        {roots.map((root) => (
          <button
            className={`${
              userRoot === root ? "isSelected" : ""
            }`}
            key={root}
            onClick={() => {
              handleSelectRoot(root);
            }}
          >
            <MathJax>{`\\( \\sqrt[${root}]{x} \\)`}</MathJax>
          </button>
        ))}
      </article>
    </div>
  );
}
