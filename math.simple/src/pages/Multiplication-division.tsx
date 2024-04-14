import { FormEvent, useEffect, useState } from "react"


export function MultiplicationDivision() {
    const [result, setResult] = useState<number>()
    const [answer, setAnswer] = useState<string>()
    const [validation, setValidation] = useState<boolean | null>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [numbers, setNumbers] = useState<number[]>([])
    const [operator, setOperator] = useState<number>(0)

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

                setNumbers(generatedNumbers)
            }

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

        console.log(result, answer)
        const parsedAnswer = parseFloat(answer?.toString() || "0").toFixed(2)
        const fixedResult = result?.toFixed(2)

        if (fixedResult === parsedAnswer) {
            setValidation(true)
            setTimeout(() => {
                setOperator(0)
                setNumbers([])
            }, 1000)
        } else {
            setValidation(false);
        }
    }

    return (
        <section>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div>
                        <h2>MATH.SIMPLE</h2>
                    </div>
                    <div>
                        <form onSubmit={validateAnswer}>
                            <article>
                                <span>
                                    {numbers.map((number, index) => (
                                        <p key={index}>{number} {operator === 1 ? "*" : "/"}</p>
                                    ))}
                                </span>
                            </article>
                            <article>
                                <input
                                    className={`${validation ? "correct" : "incorrect"}`}
                                    onChange={(e) => {
                                        setAnswer(e.target.value)
                                        setValidation(null)
                                    }}
                                />
                            </article>
                        </form>
                    </div>
                    <div>
                        <button>Skip</button>
                    </div>
                </div>
            )}
        </section>
    )
}