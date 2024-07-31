export default function generateNumbers({
  userType,
  max,
  min,
}: {
  userType: number | string;
  max: number;
  min: number;
}): number[] {
  const generatedNumbers: number[] = [];

  if (typeof userType === "number") {
    for (let i = 0; i < userType; i++) {
      const newNumber = Math.floor(Math.random() * max) + min;
      generatedNumbers.push(newNumber);
    }

    if (generatedNumbers.length === 1) {
      return [generatedNumbers[0]];
    }
  } else if (typeof userType === "string") {
    if (userType === "exact") {
      let number1: number;
      let number2: number;
      let module: number;

      do {
        number1 = Math.floor(Math.random() * max) + min;
        number2 = Math.floor(Math.random() * max) + min;
        module = number1 % number2;
      } while (module !== 0 || number1 === number2);

      generatedNumbers.push(number1, number2);
    } else if(userType === "root"){
      const root = min;
      let number;
      let result;

      do {

        number = Math.floor(Math.random() * max) + min;
        result = Math.pow(number, 1/root)
        
      } while (!Number.isInteger(result));
      
      generatedNumbers.push(number);
    } else if(userType === "log"){

      const base = min;
      let number1;
      let number2;

      do {

        number2 = Math.floor(Math.random() * max) + 1;
        number1 = Math.pow(base, number2)
        
      } while (!Number.isInteger(number1));
      
      generatedNumbers.push(number1, number2);
    }
  }

  return generatedNumbers;
}
