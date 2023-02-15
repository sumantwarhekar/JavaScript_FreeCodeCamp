function findElement(arr, func) {
    for(let i in arr){
      let number=arr[i];
      if(func(number))
        return number;
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);