function uniteUnique(...arr) {
    let answer=[];
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr[i].length;j++){
        if(!answer.includes(arr[i][j]))
          answer.push(arr[i][j]);
      }
    }
    return answer;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);