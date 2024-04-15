import { useState } from "react"
import { Navigate } from "react-router-dom"


export function Intermediate() {

    const [userNumber, setUserNumbers] = useState<number>()
    const buttons: number[] = [1,2,3,4,5,6,7,8]

    return (
        <div>
            <div>
                <span>How many numbers you want for the operations</span>
                <article>
                    {buttons.map(button =>(
                        <button onClick={()=>{setUserNumbers(button)}}>{button}</button>
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

