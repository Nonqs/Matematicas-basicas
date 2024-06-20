import { useState } from "react"
import { Navigate } from "react-router-dom"
import "../styles/OperationPage.css"
import { Title } from "../components/Title"

export function Intermediate() {

    const [userNumber, setUserNumbers] = useState<number>()
    const [userOperator, setUserOperator] = useState<string>()
    const buttons: number[] = [2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="container">
            <Title></Title>
            <div>
                <span className="text">How many numbers you want for the operations?</span>
                <article>
                    {buttons.map(button => (
                        <button
                            key={button}
                            className={`${userNumber === button ? "isSelected" : ""} numbers-button`}
                            onClick={() => { setUserNumbers(button) }}
                        >
                            {button}
                        </button>
                    ))}
                </article>
            </div>
            <div>
                <span className="text">What type of operations do you want to practice?</span>
                <article>
                    <button className="select" onClick={() => { setUserOperator("only") }}>
                        addition-only or subtraction-only operations
                    </button>
                    <button className="select" onClick={() => { setUserOperator("Combined") }}>
                        Combined operations of addition and subtraction
                    </button>
                </article>
            </div>
            {
                userNumber && userOperator && (
                    <Navigate to={`/add-sub/${userNumber}/${userOperator}`} ></Navigate>
                )
            }
        </div>
    )
}

