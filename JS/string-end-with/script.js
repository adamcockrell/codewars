function solution(str, ending) {
    let strToArray = str.split("")
    let startPos = str.length - ending.length
    finalArray = strToArray.splice(startPos, str.length)
    let result = finalArray.toString()
    let finalResult = result.split(",").join("")
    if(finalResult === ending) {
        return true
    }
    return false
}

console.log(solution('abve', 'bve'))