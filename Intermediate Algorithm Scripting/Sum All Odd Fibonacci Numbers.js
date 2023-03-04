function sumFibs(num) {
    let answer=0;
    let t1=0;
    let t2=1;
    while(t2<=num){
       if (t2 % 2 !== 0) {
        answer += t2;
      }
      t2 += t1;
      t1 = t2 - t1;
    }
    return answer;
  }
  
  sumFibs(4);