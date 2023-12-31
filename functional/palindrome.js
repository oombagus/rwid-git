/**
 * Determine whether the given value is a palindrome or not.
 *
 * @param {string} value
 */
function isPalindromeWithReverse(value) {
    // write your code here using reverse way
    let nvalue = value.split("").reverse().join("");
    if (value == nvalue) {
        return `The word "${value}" is palindrome`
        // return nvalue
    } else {
        return `The word "${value}" is NOT palindrome`
    }
}

/**
 * Determine whether the given value is a palindrome or not.
*
* @param {string} value
*/
function isPalindromeWithLoop(value) {
    // write your code here using loop way
    let vlength = value.length
    let ow = []
    let nw = []
    
    for(let i=0; i<vlength; i++) {
        ow.push(value[i])
    }
    
    for(let j=vlength-1; j>=0; j--) {
        nw.push(value[j])
    }
    
    if (JSON.stringify(ow) == JSON.stringify(nw)) {
        return `The word "${value}" is palindrome`
    } 
    else {
        return `The word "${value}" is NOT palindrome`
    }
}

const word = isPalindromeWithReverse("buku")
console.log(word)

const word2 = isPalindromeWithLoop("malam")
console.log(word2)