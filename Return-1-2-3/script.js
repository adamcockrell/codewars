function one_two() {
    let numb = Math.floor(Math.random()*2)
    if(numb == 0) {
        return 1
    } else {
        return 2
    }
}



function one_two_three() {
  
    let x = (one_two())
    let y = (one_two())
    let z = (one_two())
    
    let num = 0
    

    return num
    
  }

  console.log(one_two_three())