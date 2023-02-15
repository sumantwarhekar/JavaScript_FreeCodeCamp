function factorialize(num) {
    let answer=1;
    let i=1;
    while(i<=num){
      answer*=i;
      i++;
    }
    return answer;
  }
  
  factorialize(5);