//  Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
//  formed by reversing the digits of 'x' without using any built-in methods for reversal. After
//  reversing the digits, determine whether the resulting number has any prime factors. If it does
//  have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."


const reverseAndPrimeFactorArray = (x)=>{
    
    let newNumber = 0;
    while(x>0){
        let remainder = x%10
        newNumber = newNumber*10+remainder
        x= Math.floor(x/10)
    }

    function checkForPrime(number){
        if(number===1){
            return false
        }
        if(number===2 || number ===3 || number ===5){
            return true
        }

        //im incrementing i by two because its a waste to check any even number
        for(let i =7;i<Math.sqrt(number);i+=2){
            if(number%i===0){
                return false
            }
        }
        return true
    }
    let primeFactorArray = []

    for(let i=0;i<newNumber/2;i++){
        if(newNumber%i===0 && checkForPrime(i)){
            primeFactorArray.push(i)
        }
    }
    if(primeFactorArray.length>0){
        return `Yes: [${primeFactorArray}]`
    }
    return "No"
}