import { FormEvent, useEffect, useState } from "react"
import "../styles/OperationPage.css"
import { Title } from "../components/Title"
import { Load } from "../components/Load"
import { generateOperators } from "../utils/common/generateOperator"
import generateNumbers from "../utils/common/generateNumbers"
import { arithmeticValidator } from "../utils/results/arithmeticValidator"

export function MultiplicationDivision() {

    const [answer, setAnswer] = useState<number | string>("");
    const [validation, setValidation] = useState<boolean | null>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [numbers, setNumbers] = useState<number[]>([])
    const [operators, setOperators] = useState<string[]>([]);
    const [send, setSend] = useState<boolean | null>(null)
    const [operator, setOperator] = useState<string>("")
    const quantityOfNumbers = 2

    useEffect(() => {

        if (operators.length === 0 || numbers.length === 0) {

            let userOperator = Math.floor(Math.random() * 2) + 1 == 1 ?("multiplication") : ("division")
            setOperator(userOperator)
            setOperators(generateOperators({userOperator, userNumber:quantityOfNumbers}))
            setNumbers(generateNumbers({userNumber: quantityOfNumbers}))

            setTimeout(() => {
                setIsLoading(false)
            }, 1000)

        }

    }, [numbers])

    const validateAnswer = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = arithmeticValidator({ operators, numbers });
        setSend(true)

        const parsedAnswer = parseFloat(answer?.toString() || "0")
        const fixedResult = result || 0;

        if (operator === "multiplication") {
            
            if (fixedResult === parsedAnswer) {
                setValidation(true)

                setTimeout(() => {
                    setNumbers([])
                    setAnswer("");
                    setSend(null)
                }, 1000)
            } else {
                setValidation(false)

                setTimeout(() => {
                    setAnswer("");
                    setSend(null)
                }, 1000)
            }
        } else {
            
            const lowerBound = fixedResult - 0.01
            const upperBound = fixedResult + 0.01

            if (parsedAnswer >= lowerBound && parsedAnswer <= upperBound) {
                setValidation(true)

                setTimeout(() => {
                    setNumbers([])
                    setAnswer("");
                    setSend(null)
                }, 1000)
            } else {
                setValidation(false)

                setTimeout(() => {
                    setAnswer("");
                    setSend(null)
                }, 1000)
            }
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
                    <Title />
                    <div>
                        <form onSubmit={validateAnswer}>
                            <div className="numbers">
                                {numbers.map((number, index) => (
                                     <div key={index}>
                                        {index === 0
                                        
                                            ?(
                                                <article>
                                                    <span>
                                                        {number}
                                                    </span>
                                                </article>
                                            )
                                            :(
                                                <article>
                                                    <span>
                                                        {operators[index]}
                                                        {number}
                                                    </span>
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
                                        setAnswer(e.target.value)
                                    }}
                                    value={answer}
                                />
                            </article>

                            {operators[0] === "/" &&
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