function frankenSplice(arr1, arr2, n) {
    let answer = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      answer.splice(n, 0, arr1[i]);
      n++;
    }
    return answer;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);