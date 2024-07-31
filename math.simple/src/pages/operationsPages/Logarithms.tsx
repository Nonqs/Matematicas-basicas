import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import generateNumbers from "../../utils/common/generateNumbers";
import { Title } from "../../components/Title";
import { Load } from "../../components/Load";
import { MathJax } from "better-react-mathjax";

export function Logarithms() {
  const [number, setNumber] = useState<number[] | null>(null);
  const [answer, setAnswer] = useState<number | string>("");
  const [validation, setValidation] = useState<boolean | null>(null);
  const [logs, setLogs] = useState<number | number[] | null>(null);
  const [selectLog, setSelectLog] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [send, setSend] = useState<boolean | null>(null);
  const { selectedCard, log } = useParams<{
    selectedCard: string;
    log: string;
  }>();

  useEffect(() => {
    if (selectedCard && log) {
      if (selectedCard === "toggle") {
        const exponentArray = log.split("-").map(Number);
        setLogs(exponentArray);
      } else {
        const exponentNumber = parseInt(log, 10);
        setLogs(exponentNumber);
      }
    }
  }, [selectedCard, log]);

  useEffect(() => {
    if (selectLog === null) {
      let selectedLog;
      if (Array.isArray(logs)) {
        const max = logs.length;
        const newLogIndex = Math.floor(Math.random() * max);
        selectedLog = logs[newLogIndex];
      } else {
        selectedLog = logs;
      }
      setSelectLog(selectedLog);
    }
  }, [selectLog]);

  useEffect(()=>{
    if (number === null && selectLog !== null) {
      const maxVal = selectLog === 2
        ? 10
        : selectLog === 3
        ? 6
        : selectLog === 5
        ? 4
        : selectLog === 6
        ? 3
        : selectLog === 8
        ? 2
        : 8; 
      const result = generateNumbers({
        userType: "log",
        max: maxVal,
        min: selectLog,
      });
      setNumber(result);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [selectLog, number])
  

  const validateAnswer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (number && selectLog) {
      const result = number[1];
      setSend(true);

      if (result === Number(answer)) {
        setValidation(true);
        setTimeout(() => {
          setNumber(null);
          setAnswer("");
          setSend(null);
        }, 1000);
      } else {
        setValidation(false);
        setTimeout(() => {
          setSend(null);
          setAnswer("");
        }, 1000);
      }
    }
  };

  return (
    <section className="container">
      {isLoading ? (
        <div>
          <Title />
          <Load />
        </div>
      ) : (
        <div>
          <Title />
          <div>
            <form onSubmit={validateAnswer}>
              <div className="numbers">
                {number && (
                  <MathJax>{`\\( \\log_{${selectLog}}(${number[0]}) \\)`}</MathJax>
                )}
              </div>
              <article>
                <input
                  className={
                    send !== null ? (validation ? "correct" : "incorrect") : ""
                  }
                  onChange={(e) => setAnswer(e.target.value)}
                  value={answer}
                />
              </article>
            </form>
          </div>
          <div>
            <button
              className="skip-button"
              onClick={() => {
                setNumber(null);
                setIsLoading(true);
                setSelectLog(null)
              }}
            >
              Skip
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
