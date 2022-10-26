function isValidWalk(walk) {

    let totalx= 0

    let totaly = 0

    for(let x of walk) {
        switch(x) {
            case 'n':
                totaly++
                break
            case 'e':
                totalx++
                break
            case 's':
                totaly--
                break
            case 'w':
                totalx--
                break
        }
    }

    if(walk.length == 10) {
        if(totalx === 0 && totaly === 0) {
            return true
        }
    }

    return false
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))