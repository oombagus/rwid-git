class Factorial {
    constructor(n) {
        this.n = n
    }

    getFactorialWithLoop(n) {
        let result = 1
        for (let i=n; i>0; i--) {
            result = result * i
        }
        return result
    }

}

class Factorial2 {
    constructor(n) {
        this.n = n
    }

    getFactorialWithRecursive(n) {
        let result = 1
        if (n===0) {
            return result
        } else {
            result = n * this.getFactorialWithRecursive(n-1)
        }
        return result
    }
}

const a = new Factorial
console.log(a.getFactorialWithLoop(5))

const b = new Factorial2
console.log(b.getFactorialWithRecursive(5))