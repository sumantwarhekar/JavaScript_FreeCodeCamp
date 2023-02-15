function getIndexToIns(arr, num) {
    arr.sort((a,b)=>{
      if(a>b)
        return 1;
      else if(a<b)
        return -1;
      else
        return 0;
    });
    console.log(arr);
    let index=0;
    while(num>arr[index]){
      index++;
    }
    return index;
  }
  
  getIndexToIns([40, 60], 50);