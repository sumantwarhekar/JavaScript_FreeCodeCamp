function alphabeticalOrder(arr) {
    // Only change code below this line
    arr.sort(function (a,b){
      if(a>b)
        return 1;
      else if(a<b)
        return -1;
      else
        return 0;
    });
    return arr
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);