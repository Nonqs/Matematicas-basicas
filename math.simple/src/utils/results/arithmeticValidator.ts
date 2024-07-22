
export function arithmeticValidator({operators, numbers}: {operators: string[], numbers: number[]}){

    let calculatedResult = operators[0] === "+" || operators[0] === "-" ?(0) :(1)

    for (let i = 0; i < operators.length; i++) {

        if (operators[i] === "+") {

            calculatedResult = calculatedResult + numbers[i]

        } else if(operators[i] === "-"){

            calculatedResult = calculatedResult - numbers[i]

        } else if(operators[i] === "*"){
            
            calculatedResult = calculatedResult * numbers[i]

        } else if(operators[i] === "/"){

            if(i === 0){
                calculatedResult =  numbers[i] / calculatedResult 
            } else{
                calculatedResult =  calculatedResult  / numbers[i] 
            }

        }

    }
    return calculatedResult
}