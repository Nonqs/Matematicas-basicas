import { useState } from "react"
import { Navigate } from "react-router-dom"
import "../styles/OperationPage.css"
import { Title } from "../components/Title"

export function Intermediate() {

    const [userNumber, setUserNumbers] = useState<number>()
    const buttons: number[] = [2,3,4,5,6,7,8]

    return (
        <div className="container">
            <Title></Title>
            <div>
                <span className="text">How many numbers you want for the operations?</span>
                <article>
                    {buttons.map(button =>(
                        <button className="numbers-button" onClick={()=>{setUserNumbers(button)}}>{button}</button>
                    ))}
                </article>
            </div>
            {
                userNumber && (
                    <Navigate to={`/add-sub/${userNumber}`} ></Navigate>
                )
            }
        </div>
    )
}

