function getFactorialWithLoop(n) {
    let result = 1
    for(let i=n; i>0; i--) {
        result = result * i
    }
    return result
}

function getFactorialWithRecursive(n) {
    let result = 1
    if(n===0) {
        return result
    } else {
        result = n * getFactorialWithRecursive(n-1)
    }
    return result
}

const factorial = getFactorialWithLoop(4)
console.log(`Factorial with loop: ${factorial}`)

const factorial2 = getFactorialWithRecursive(4)
console.log(`Factorial with recursive: ${factorial2}`)