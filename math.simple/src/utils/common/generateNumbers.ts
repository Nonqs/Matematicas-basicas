export default function generateNumbers ({ userNumber }: {userNumber: number}){
    const generatedNumbers = []
    for (let i = 0; i < userNumber; i++) {
        const newNumber = Math.floor(Math.random() * 100) + 1
        generatedNumbers.push(newNumber)
    }
    
    return generatedNumbers
}