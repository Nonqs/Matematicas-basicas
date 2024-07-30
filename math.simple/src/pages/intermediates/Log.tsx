import { useState } from "react";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { ToggleLogarithms } from "../../components/cards/logarithms/ToggleLog";
import { SingleLogarithms } from "../../components/cards/logarithms/SingleLog";

export function LogarithmsIntermediate() {
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [userLogs, setUserLogs] = useState<number[]>([]);
  const [userLog, setUserLog] = useState<number | null>(null);

  const handleSelectedCard = (selected: string): void => {
    setSelectedCard(selected);
    if (selected === "single") {
      setUserLogs([]);
    } else {
      setUserLog(null);
    }
  };

  const handleToggleLog = (log: number) => {
    setUserLogs((prevExponents) => {
      if (prevExponents.includes(log)) {
        return prevExponents.filter((lg) => lg !== log);
      } else {
        return [...prevExponents, log];
      }
    });
  };

  const handleSelectLog = (root: number) => {
    setUserLog(root);
  };

  const handleNextClick = () => {
    if (selectedCard === "single" && userLog !== null) {
      navigate(`/log/${selectedCard}/${userLog}`);
    } else if (selectedCard === "toggle" && userLogs.length > 0) {
      const logs = userLogs.join("-");
      navigate(`/log/${selectedCard}/${logs}`);
    }
  };

  return (
    <section className="relative">
      <Title />
      <div className="container">
        <h2 className="subtitle">What do you want to practice</h2>
        <article className="cards-container">
          <SingleLogarithms
            handleSelectedCard={handleSelectedCard}
            selectedCard={selectedCard}
            handleSelectLog={handleSelectLog}
            userLog={userLog}
          />
          <ToggleLogarithms
            handleSelectedCard={handleSelectedCard}
            selectedCard={selectedCard}
            handleToggleLog={handleToggleLog}
            userLogs={userLogs}
          />
        </article>
      </div>
      {selectedCard && (userLog !== null || userLogs.length > 1) ? (
        <button onClick={handleNextClick} className="next-button">
          Next
        </button>
      ) : (
        <button className="next-button disabled" disabled>
          Next
        </button>
      )}
    </section>
  );
}
