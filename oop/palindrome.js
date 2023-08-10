class Palindrome {
    constructor(value) {
        this.value = value
    }

    isPalindromeWithReverse(value) {
        // write your code here using reverse way
        let nvalue = value.split("").reverse().join("");
        if (value == nvalue) {
            return `The word "${value}" is palindrome`
        } else {
            return `The word "${value}" is NOT palindrome`
        }
    }
}

class Palindrome2 {
    constructor(value) {
        this.value = value
    }

    isPalindromeWithLoop(value) {
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
}

const palindromeWithReverse = new Palindrome
console.log(palindromeWithReverse.isPalindromeWithReverse('kaca'))

const palindromeWithLoop = new Palindrome2
console.log(palindromeWithLoop.isPalindromeWithLoop('mata'))