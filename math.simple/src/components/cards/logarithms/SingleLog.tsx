import { MathJax } from "better-react-mathjax";
import "../../../styles/Intermediates.css";

export function SingleLogarithms({
  handleSelectedCard,
  selectedCard,
  handleSelectLog,
  userLog,
}: {
  handleSelectedCard: (selected: string) => void;
  selectedCard: string | null;
  handleSelectLog: (exponent: number) => void;
  userLog: number | null;
}) {
  const logs = [1, 2, 3, 4, 5];
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
        <h3 className="subtitle no-margin">Logarithms With a Single Base</h3>
      </article>
      <article className="buttons-container">
        {logs.map((log) => (
          <button
            className={`${userLog === log ? "isSelected" : ""}`}
            key={log}
            onClick={() => {
              handleSelectLog(log);
            }}
          >
            <MathJax>{`\\( \\log_{${log}}(x) \\)`}</MathJax>
          </button>
        ))}
      </article>
    </div>
  );
}
