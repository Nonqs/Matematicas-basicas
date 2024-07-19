
export function arithmeticValidator({operators, numbers}: {operators: string[], numbers: number[]}){

    let calculatedResult = 0

    for (let i = 0; i < operators.length; i++) {

        if (operators[i] === "+") {

            calculatedResult = calculatedResult + numbers[i]

        } else if(operators[i] === "-"){

            calculatedResult = calculatedResult - numbers[i]

        } else if(operators[i] === "*"){

        } else if(operators[i] === "/"){

        }

    }
    return calculatedResult
}