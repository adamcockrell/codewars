function century(year) {
    const arrOfStrings = Array.from(String(year))
    let arrOfNums = arrOfStrings.map(str => Number(str))
    arrOfNums.pop()
    arrOfNums.pop()
    for(let x in arrOfNums.toString()) {
        let result = 0
        result += x
        return result
    }
}
console.log(century(1700))