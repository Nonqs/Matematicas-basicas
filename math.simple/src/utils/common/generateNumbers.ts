export default function generateNumbers ({ userNumber, max, min }: {userNumber: number, max: number, min: number}){
    const generatedNumbers = []
    for (let i = 0; i < userNumber; i++) {
        const newNumber = Math.floor(Math.random() * max) + min
        generatedNumbers.push(newNumber)
    }

    if(generatedNumbers.length === 1){
        const number = generatedNumbers[0]
        
        return number
    }
    
    return generatedNumbers
}