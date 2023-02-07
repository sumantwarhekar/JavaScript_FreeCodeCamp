function sumPrimes(num) {
    let sum=0;
    for(let i=2;i<=num;i++){
      let count=0;
      for(let j=2;j<=num;j++){
        if(i%j===0){
          count++;
        }
      }
      if(count===1){
            sum+=i;
      }
    }
    return sum;
  }
  
  sumPrimes(10);