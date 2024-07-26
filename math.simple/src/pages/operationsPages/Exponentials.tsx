import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import generateNumbers from "../../utils/common/generateNumbers";
import { Title } from "../../components/Title";
import { Load } from "../../components/Load";
import { arithmeticValidator } from "../../utils/results/arithmeticValidator";

export function Exponentials() {
  const [number, setNumber] = useState<number | null>(null);
  const [answer, setAnswer] = useState<number | string>("");
  const [validation, setValidation] = useState<boolean | null>(null);
  const [exponential, setExponential] = useState<number | number[] | null>();
  const [selectExponent, setSelectExponent] = useState<number | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [send, setSend] = useState<boolean | null>(null);
  const { selectedCard, exponent } = useParams<{
    selectedCard: string;
    exponent: string;
  }>();

  useEffect(() => {
    if (selectedCard && exponent) {
      if (selectedCard === "toggle") {
        const exponentArray = exponent.split("-").map(Number);
        setExponential(exponentArray);
      } else {
        const exponentNumber = parseInt(exponent, 10);
        console.log("Single Exponent:", exponentNumber);
        setExponential(exponentNumber);
      }
    }
  }, [selectedCard, exponent]);

  useEffect(() => {
    if (number === null) {
      const result = generateNumbers({ userNumber: 1, max: 9, min: 2 });
      if (!Array.isArray(result)) {
        setNumber(result);
      }
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [number]);

  useEffect(() => {
    if (number !== null && exponential !== null) {
      if (Array.isArray(exponential)) {
        const max = exponential.length;
        const newExpIndex = Math.floor(Math.random() * max);
        setSelectExponent(exponential[newExpIndex]);
      } else {
        setSelectExponent(exponential);
      }
    }
  }, [number, exponential]);

  const validateAnswer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (number && selectExponent) {
      const result = number ** selectExponent;
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
                <span>
                  {number}
                  <sup>{selectExponent}</sup>
                </span>
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
