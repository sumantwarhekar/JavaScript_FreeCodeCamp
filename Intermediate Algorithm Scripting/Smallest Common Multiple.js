function smallestCommons(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let answer = max;
  
    for(let i = max; i >= min; i--){
      if(answer % i !== 0){
        answer += max; 
        i = max;
      } 
    }
  
    return answer;  
  }
  
  smallestCommons([1,5]);