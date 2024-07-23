import { useState } from "react"
import { Navigate } from "react-router-dom"
import "../../styles/OperationPage.css"
import { Title } from "../../components/Title"

export function Intermediate() {

    const [userNumber, setUserNumbers] = useState<number>()
    const [userOperators, setUserOperators] = useState<string>()
    const buttons: number[] = [2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="container">
            <Title></Title>
            <div>
                <span className="text">How many numbers you want for the operations?</span>
                <article className="buttons-container">
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
                <article className="buttons-container">
                    <button className="select" onClick={() => { setUserOperators("only") }}>
                        addition-only or subtraction-only operations
                    </button>
                    <button className="select" onClick={() => { setUserOperators("Combined") }}>
                        Combined operations of addition and subtraction
                    </button>
                </article>
            </div>
            {
                userNumber && userOperators && (
                    <Navigate to={`/add-sub/${userNumber}/${userOperators}`} ></Navigate>
                )
            }
        </div>
    )
}

