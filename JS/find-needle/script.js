function findNeedle(haystack) {
    var pos = 0
    
    for(let x in haystack) {
        
        if(haystack[x] == 'needle') {
        pos = x
        
      }
    }
    return "found the needle at position " + pos
    
}