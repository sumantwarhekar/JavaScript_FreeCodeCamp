const squareList = arr => {
    // Only change code below this line
    let answer = arr.filter(number=>number>0 && number%parseInt(number)===0);
    answer = answer.map(item => Math.pow(item,2));
    // Only change code above this line
    return answer;
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);