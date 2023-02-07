function chunkArrayInGroups(arr, size) {
    let answer=[];
    for(let i=0;i<arr.length;i+=size){
      let temp =arr.slice(i,i+size);
      answer.push(temp);
    }
    return answer;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);