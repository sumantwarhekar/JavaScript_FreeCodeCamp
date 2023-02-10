// Only change code below this line
function countdown(n){
    if(n<1)
      return [];
    else{
      const answer = countdown(n-1);
      answer.unshift(n);
      return answer;
    }
  }
  // Only change code above this line