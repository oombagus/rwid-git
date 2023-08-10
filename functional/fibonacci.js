function getFibonacci(sequence) {
    let result = []

    for(let i=0; i<=sequence; i++) {
        if (sequence == 0) {
            result.push(i)
        }
        else if (sequence == 1) {
            result.push(i)
            result.push(sequence)
        }
        else if (sequence>1) {
            result.push(i)
            result.push(i+1)
            result.push((sequence-1)+(sequence-2))
            sequence--
        } 
        return result
    }
}

const a = getFibonacci(0)
console.log(a)