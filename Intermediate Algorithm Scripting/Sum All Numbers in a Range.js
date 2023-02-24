function sumAll(arr) {
    let answer=0;
    let small = Math.min(...arr);
    let big = Math.max(...arr);
    for(let i=small;i<=big;i++){
      answer+=i;
    }
    return answer;
  }
  sumAll([1, 4]);