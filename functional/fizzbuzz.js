/**
 * Create an array filled by "fizz", "buzz", or "fizz buzz" based on
 * this requirement below (highest priority from above).
 *
 * Muliples of 4 or 7: "fizz buzz"
 * Odd sequence: "fizz"
 * Even sequence: "buzz"
 *
 * @param {number} sequence
 */
function generateFizzBuzz(sequence) {
    // write your code here
    result = []
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

const fizzbuzz = generateFizzBuzz(20)
console.log(fizzbuzz)