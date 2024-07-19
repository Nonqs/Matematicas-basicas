export const generateOperators = ({userOperator, userNumber}: {userOperator: string , userNumber: number}) => {
    if (userOperator === "only") {

        const prob = Math.floor(Math.random() * 2) + 1

        const newOperators = []
        for (let i = 0; i < userNumber; i++) {
            if (prob === 1) {
                newOperators.push("+")
            } else {
                newOperators.push("-")
            }
        }
        
        return newOperators

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
        
        return newOperators
    }
}