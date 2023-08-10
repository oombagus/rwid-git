class Fizzbuzz {
    constructor(sequence) {
        this.sequence = sequence
    }

    generateFizzBuzz(sequence) {
        // write your code here
        let result = []
        for(let i=1; i<=sequence; i++) {
            if (i%4 === 0 || i%7 === 0) {
                result.push('fizz buzz')
            } else if (i%2===1) {
                result.push('fizz')
            } else if (i%2===0) {
                result.push('buzz')
            }
        }
        return result
    }
}

const fizzbuzz = new Fizzbuzz
console.log(fizzbuzz.generateFizzBuzz(20))