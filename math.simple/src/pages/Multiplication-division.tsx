import { FormEvent, useEffect, useState } from "react"
import "../styles/OperationPage.css"
import { Title } from "../components/Title"
import { Load } from "../components/Load"

export function MultiplicationDivision() {

    const [result, setResult] = useState<number>()
    const [answer, setAnswer] = useState<string>()
    const [validation, setValidation] = useState<boolean | null>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [numbers, setNumbers] = useState<number[]>([])
    const [operator, setOperator] = useState<number>(0)
    const [send, setSend] = useState<boolean | null>(null)

    useEffect(() => {

        const userNumber = 2

        if (operator === 0) {

            const prob = Math.floor(Math.random() * 2) + 1
            setOperator(prob)

        }

        const generateNumbers = () => {

            const generatedNumbers = []
            if (operator === 1) {
                for (let i = 0; i < userNumber; i++) {
                    const newNumber = Math.floor(Math.random() * 10) + 2
                    generatedNumbers.push(newNumber)
                }
            } else {

                const firstNumber = Math.floor(Math.random() * 100) + 2
                generatedNumbers.push(firstNumber)

                const secondNumber = Math.floor(Math.random() * 10) + 2
                generatedNumbers.push(secondNumber)
            }

            setNumbers(generatedNumbers)

        }

        if (numbers.length === 0) {

            generateNumbers()

            setTimeout(() => {
                setIsLoading(false)
            }, 1000)

        } else {

            let calculatedResult
            if (operator === 1) {
                const firstNumber = numbers[0]
                const secondNumber = numbers[1]

                calculatedResult = firstNumber * secondNumber
            } else {
                const firstNumber = numbers[0]
                const secondNumber = numbers[1]

                calculatedResult = firstNumber / secondNumber
            }
            setResult(calculatedResult)
            console.log(calculatedResult)
        }

    }, [numbers])

    const validateAnswer = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSend(true)

        const parsedAnswer = parseFloat(answer?.toString() || "0")
        const fixedResult = result || 0;

        if (operator === 1) {
            
            if (fixedResult === parsedAnswer) {
                setValidation(true)
            } else {
                setValidation(false)
            }
        } else {
            
            const lowerBound = fixedResult - 0.01
            const upperBound = fixedResult + 0.01

            if (parsedAnswer >= lowerBound && parsedAnswer <= upperBound) {
                setValidation(true)
            } else {
                setValidation(false)
            }
        }

        setTimeout(() => {
            setOperator(0)
            setNumbers([])
            setSend(null)
        }, 1000)

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
                    <Title />
                    <div>
                        <form onSubmit={validateAnswer}>
                            <div className="numbers">
                                {numbers.map((number, index) => (
                                    <article key={index}>
                                        {index === numbers.length - 1
                                            ? (<span>{number}</span>)
                                            : (<span>{number} {operator === 1 ? " x" : " /"} &nbsp;</span>)
                                        }
                                    </article>
                                ))}
                            </div>
                            <article>
                                <input
                                    className={send !== null ? (validation ? "correct" : "incorrect") : ""}
                                    onChange={(e) => {
                                        setAnswer(e.target.value)
                                    }}
                                />
                            </article>

                            {operator === 2 &&
                                (
                                    <span style={{ color: "#560bad" }}>Round to 2 digits</span>
                                )
                            }
                        </form>
                    </div>
                    <div>
                        <button className="skip-button" onClick={() => { setNumbers([]), setIsLoading(true) }}>Skip</button>
                    </div>
                </div>
            )}
        </section>
    )
}