import { useState, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
import "../styles/OperationPage.css"
import { Title } from "../components/Title";
import { Load } from "../components/Load";

export function AdditionSubtraction() {
    
    const [result, setResult] = useState<number>()
    const [answer, setAnswer] = useState<number>()
    const [validation, setValidation] = useState<boolean | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [numbers, setNumbers] = useState<number[]>([])
    const [operator, setOperator] = useState<number>()
    const [operatorCombined, setOperatorCombined] = useState<string[]>([])
    const [send, setSend] = useState<boolean | null>(null)
    const { userNumbers, userOperator } = useParams()
    let userNumber: number

    if (userNumbers) {
        userNumber = parseInt(userNumbers)
    }

    useEffect(() => {

        const generateNumbers = () => {
            const generatedNumbers = []
            for (let i = 0; i < userNumber; i++) {
                const newNumber = Math.floor(Math.random() * 100) + 1
                generatedNumbers.push(newNumber)
            }
            setNumbers(generatedNumbers)
        }

        const generateOperators = () => {
            if (userOperator === "only") {

                const prob = Math.floor(Math.random() * 2) + 1
                setOperator(prob)

            } else {


                const newOperators = []
                for (let i = 0; i < userNumber; i++) {
                    const prob = Math.floor(Math.random() * 2) + 1
                    if (prob === 1) {
                        newOperators.push("+")
                    } else {
                        newOperators.push("-")
                    }
                }
                setOperatorCombined(newOperators)
            }
        }

        if (numbers.length === 0) {

            generateNumbers()
            generateOperators()

            setTimeout(() => {
                setIsLoading(false)
            }, 1000)

        } else {

            let calculatedResult = 0

            if (userOperator === "only") {

                if (operator === 1) {
                    calculatedResult = numbers.reduce((acumulador, elemento) => acumulador + elemento, 0)
                } else {
                    calculatedResult = numbers.reduce((acumulador, elemento) => acumulador - elemento, 0)
                }
                setResult(calculatedResult)

            } else {

                for (let i = 0; i < userNumber; i++) {

                    if (operatorCombined[i] === "+") {

                        calculatedResult = calculatedResult + numbers[i]

                    } else {

                        calculatedResult = calculatedResult - numbers[i]

                    }

                }
                setResult(calculatedResult)
                console.log(calculatedResult)
            }
        }

    }, [numbers])

    const validateAnswer = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        setSend(true)

        if (result === answer) {
            setValidation(true)
            setTimeout(() => {
                setNumbers([])
                setSend(null)
            }, 1000)
        } else {
            setValidation(false)
            setTimeout(() => {
                setSend(null)
            }, 1000)
        }
    }

    return (
        <section className="container">
            {isLoading ? (
                <div>
                    <Title />
                    <Load />
                </div>
            ) : (
                <div>
                    <Title></Title>
                    <div>
                        <form onSubmit={validateAnswer}>
                            <div className="numbers">
                                {numbers.map((number, index) => (
                                    <div key={index}>
                                        {userOperator === "only"
                                            ? (
                                                <article>
                                                    {index === numbers.length - 1
                                                        ? (
                                                            <span>{number}</span>
                                                        )
                                                        : (
                                                            <span>{operator === 2 && index === 0 && ("-")} {number} {operator === 1 ? "+" : "-"}</span>
                                                        )
                                                    }
                                                </article>
                                            )
                                            : (
                                                <article>
                                                    {index === 0
                                                        ? (
                                                            <span> {operatorCombined[index] === "-" && ("-")} {numbers[index]} </span>
                                                        )
                                                        : (
                                                            <span> &nbsp;{operatorCombined[index]} {numbers[index]} </span>
                                                        )}

                                                </article>
                                            )
                                        }
                                    </div>
                                ))}
                            </div>
                            <article>
                                <input
                                    className={send !== null ? (validation ? "correct" : "incorrect") : ""}
                                    onChange={(e) => {
                                        const inputValue = parseInt(e.target.value, 10);
                                        setAnswer(inputValue)
                                    }}
                                />
                            </article>
                        </form>
                    </div>
                    <div>
                        <button className="skip-button" onClick={() => { setNumbers([]), setIsLoading(true) }}>Skip</button>
                    </div>
                </div >
            )
            }
        </section >
    )
}
