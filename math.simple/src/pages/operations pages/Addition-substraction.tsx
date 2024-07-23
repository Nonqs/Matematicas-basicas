import { useState, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
import "../../styles/OperationPage.css";
import generateNumbers from "../../utils/common/generateNumbers";
import { generateOperators } from "../../utils/common/generateOperator";
import { arithmeticValidator } from "../../utils/results/arithmeticValidator";
import { Title } from "../../components/Title";
import { Load } from "../../components/Load";

export function AdditionSubtraction() {
  const [answer, setAnswer] = useState<number | string>("");
  const [validation, setValidation] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [operators, setOperators] = useState<string[]>([]);
  const [send, setSend] = useState<boolean | null>(null);
  const { userNumbers, userOperators } = useParams();
  let userNumber: number;
  let userOperator: string;

  if (userNumbers && userOperators) {
    userNumber = parseInt(userNumbers);
    userOperator = userOperators;
  }

  useEffect(() => {
    if (numbers.length <= 0) {
      setNumbers(generateNumbers({ userNumber }));
      setOperators(generateOperators({ userOperator, userNumber }));

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [numbers]);

  const validateAnswer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = arithmeticValidator({ operators, numbers });
    setSend(true);

    if (result === Number(answer)) {
      setValidation(true);
      setTimeout(() => {
        setNumbers([]);
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
                    <article>
                      <span>
                        {operators[index]}
                        {number}
                      </span>
                    </article>
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
