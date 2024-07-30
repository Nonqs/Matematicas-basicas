import { useState, useEffect, FormEvent } from "react";
import "../../styles/OperationPage.css";
import generateNumbers from "../../utils/common/generateNumbers";
import { arithmeticValidator } from "../../utils/results/arithmeticValidator";
import { Title } from "../../components/Title";
import { Load } from "../../components/Load";
import { useParams } from "react-router-dom";

export function Division() {
  const [answer, setAnswer] = useState<number | string>("");
  const [validation, setValidation] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [send, setSend] = useState<boolean | null>(null);
  const { type } = useParams();
  let userType: string | number;

  if (type) {
    userType = type === "exact" ? "exact" : 2;
  }

  const operators = ["+", "/"];

  useEffect(() => {
    if (numbers.length <= 0) {
      const result = generateNumbers({ userType, max: 100, min: 5 });
      if (Array.isArray(result)) setNumbers(result);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [numbers]);

  const validateAnswer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = arithmeticValidator({ operators, numbers });
    setSend(true);

    const parsedAnswer = parseFloat(answer?.toString() || "0");
    const fixedResult = result || 0;

    const lowerBound = fixedResult - 0.01;
    const upperBound = fixedResult + 0.01;

    if (parsedAnswer >= lowerBound && parsedAnswer <= upperBound) {
      setValidation(true);

      setTimeout(() => {
        setNumbers([]);
        setAnswer("");
        setSend(null);
      }, 1000);
    } else {
      setValidation(false);

      setTimeout(() => {
        setAnswer("");
        setSend(null);
      }, 1000);
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
                {numbers.map((number, index) => (
                  <div key={index}>
                    {index === 0 ? (
                      <article>
                        <span>{number}</span>
                      </article>
                    ) : (
                      <article>
                        <span>
                          {operators[index]}
                          {number}
                        </span>
                      </article>
                    )}
                  </div>
                ))}
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
              {type === "integer" && (
                <span className="alert" style={{ color: "#560bad" }}>Round to 2 digits</span>
              )}
            </form>
          </div>
          <div>
            <button
              className="skip-button"
              onClick={() => {
                setNumbers([]);
                setIsLoading(true);
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
