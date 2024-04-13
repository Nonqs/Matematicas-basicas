import { useState, useEffect } from "react";

export function AdditionSubtraction() {
    const [result, setResult] = useState<number>()
    const [answer, setAnswer] = useState<number>()
    const [validation, setValidation] = useState<boolean | null>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [numbers, setNumbers] = useState<number[]>([])

    const userNumber = 8
    const prob = Math.floor(Math.random() * 2) + 1

    useEffect(() => {
        const generateNumbers = () => {
            const generatedNumbers = []
            for (let i = 0; i < userNumber; i++) { 
                const newNumber = Math.floor(Math.random() * 100) + 1
                generatedNumbers.push(newNumber)
            }
            setNumbers(generatedNumbers)
        };

        generateNumbers()

        if (prob === 1) {
            const addition = numbers.reduce((acumulador, elemento) => acumulador + elemento, 0);
            setResult(addition)
        } else {
            const substraction = numbers.reduce((acumulador, elemento) => acumulador - elemento, 0);
            setResult(substraction)
        }
        
        setTimeout(() => {
            setIsLoading(false)
          }, 1000)

    }, [])

    const validateAnswer = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (result === answer) {
            setValidation(true)
        } else {
            setValidation(false)
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
                                    {prob === 1 ? (
                                        numbers.map((number, index) => (
                                            <p key={index}>{number} + </p>
                                        ))
                                    ) : (
                                        numbers.map((number, index) => (
                                            <p key={index}>{number} - </p>
                                        ))
                                    )}
                                </span>
                            </article>
                            <article>
                                <input
                                    className={`${validation ? "correct" : "incorrect"}`}
                                    onChange={(e) => {
                                        const inputValue = parseInt(e.target.value, 10);
                                        setAnswer(inputValue)
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
