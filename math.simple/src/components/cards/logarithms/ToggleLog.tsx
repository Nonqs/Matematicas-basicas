import "../../../styles/Intermediates.css";
import { MathJax } from "better-react-mathjax";

export function ToggleLogarithms({
  handleSelectedCard,
  selectedCard,
  handleToggleLog,
  userLogs,
}: {
  handleSelectedCard: (selected: string) => void;
  selectedCard: string | null;
  handleToggleLog: (exponent: number) => void;
  userLogs: number[];
}) {
  const logs = [2, 3, 5, 6, 8, 10];
  const selected = "toggle";

  return (
    <div
      className={`${selectedCard === "toggle" ? "card-selected" : ""} card`}
      onClick={() => {
        handleSelectedCard(selected);
      }}
    >
      <article className="text-container">
        <h4 className="no-margin">Practice</h4>
        <h3 className="subtitle no-margin">Logarithms with Multiple Bases</h3>
      </article>
      <article className="buttons-container">
        {logs.map((log) => (
          <button
            key={log}
            className={`${userLogs.includes(log) ? "isSelected" : ""}`}
            onClick={() => handleToggleLog(log)}
          >
            <MathJax>{`\\( \\log_{${log}}(x) \\)`}</MathJax>
          </button>
        ))}
      </article>
      <span>(select 2 or more)</span>
    </div>
  );
}
