function largestOfFour(arr) {
    let answer=[];
    for(let i=0;i<arr.length;i++){
      let biggest=-Infinity;
      for(let j=0;j<arr[i].length;j++){
        if(biggest<arr[i][j])
        biggest=arr[i][j];
      }
      answer.push(biggest);
    }
    return answer;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);