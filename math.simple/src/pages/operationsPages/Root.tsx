import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import generateNumbers from "../../utils/common/generateNumbers";
import { Title } from "../../components/Title";
import { Load } from "../../components/Load";
import { arithmeticValidator } from "../../utils/results/arithmeticValidator";
import { MathJax } from "better-react-mathjax";

export function Root() {
  const [number, setNumber] = useState<number[] | null>(null);
  const [answer, setAnswer] = useState<number | string>("");
  const [validation, setValidation] = useState<boolean | null>(null);
  const [roots, setRoot] = useState<number | number[] | null>(null);
  const [selectRoot, setSelectRoot] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [send, setSend] = useState<boolean | null>(null);
  const { selectedCard, root } = useParams<{
    selectedCard: string;
    root: string;
  }>();

  useEffect(() => {
    if (selectedCard && root) {
      if (selectedCard === "toggle") {
        const exponentArray = root.split("-").map(Number);
        setRoot(exponentArray);
      } else {
        const exponentNumber = parseInt(root, 10);
        console.log("Single Exponent:", exponentNumber);
        setRoot(exponentNumber);
      }
    }
  }, [selectedCard, root]);

  useEffect(() => {
    if (roots !== null) {
      let selectedRoot;
      if (Array.isArray(roots)) {
        const max = roots.length;
        const newRootIndex = Math.floor(Math.random() * max);
        selectedRoot = roots[newRootIndex];
      } else {
        selectedRoot = roots;
      }
      setSelectRoot(selectedRoot);
  
      if (number === null && selectedRoot !== null) {
        const result = generateNumbers({
          userType: "root",
          max: selectedRoot === 2 
            ? 200   
            : 400,
          min: selectedRoot,
        });
        setNumber(result);
      }
  
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [roots, number]);
  

  const validateAnswer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (number && selectRoot) {
      const result = Math.pow(number[0], 1/selectRoot);
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
                <MathJax>{`\\( \\sqrt[${selectRoot}]{${number}} \\)`}</MathJax>
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
