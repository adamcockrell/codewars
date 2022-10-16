function inAscOrder(arr) {
    let count = 0
    
    for(let x = 1; x < arr.length; x++) {
      
      if(arr[x] > arr[x-1]) {
        count++
      }
      
      else {
        count = 0
      }
    }

    if(count == arr.length-1){
        return true
    }

    else {return false}


 }

 console.log(inAscOrder([1, 5, 2, 6, 2, 5, 7]))
 console.log(inAscOrder([1, 3, 5, 6, 7, 8]))