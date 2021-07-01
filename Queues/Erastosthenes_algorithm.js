// The Erastosthenes algorithm is a technique for finding all prime numbers up to a specified value n.
//The multiples of  a given prime are generated as a sequence of numbers starting from that prime with constant difference between them that is equal to that difference. 
//And all those multiples are not considered as the prime except the value itself

// implementing algorithm with queues
function Algorithm (numb){
    let numbers = [];
    for (let i = 2; i <= numb; i++){
        numbers.push(i);
    }

    let primeNumbers = []
    let multiples = []

    while ( numbers.length > 0 ){
        //removing the first element from the array
        let primeNumber = numbers.shift()

        //push number into prime number array
        primeNumbers.push(primeNumber)
        
        while (numbers.length > 0 ) {
            let currentNum = numbers.shift()
            if( currentNum % primeNumber != 0) multiples.push(currentNum)
        }

        let temp = numbers;
        numbers = multiples;
        multiples = temp;
    }
    return primeNumbers;
}


console.log(Algorithm(10)); // [2,3,5,7]
console.log(Algorithm(15)); //[2, 3, 5, 7, 11, 13]
console.log(Algorithm(20)); //  [2, 3, 5, 7, 11, 13, 17, 19]

//implementing algorithm with pure maths
function Erastosthenes(num) {
    let obj = {}
    for (let i = 2; i <= num; i++){
        obj[i]= false;
    }

    const limit = Math.sqrt(num)
    for(let i = 2; i<= limit; i++){
        for( let j = i+i; j<= num; j +=i){
            obj[j] = true
        }
    }

    let result = []
    for (let i = 2; i <= num; i++) {
       if(!obj[i]) result.push(i)
    }
    return result
}

console.log(Erastosthenes(100))