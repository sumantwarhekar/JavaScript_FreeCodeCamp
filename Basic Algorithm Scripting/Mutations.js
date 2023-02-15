function mutation(arr) {
    let first =  arr[0].toLowerCase().split("");
    let second = arr[1].toLowerCase().split("");
  
    for(let i=0;i<second.length;i++){
      if(!first.includes(second[i]))
        return false;
    }  
    return true;
  }
  
  mutation(["hello", "hey"]);