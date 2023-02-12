const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  // Using s = [2, 5, 7] would be invalid
  s.sort(function (a,b){
    if(a>b)
      return 1;
    else if(a<b)
      return -1;
    else
      return 0;
  });
  // Only change code above this line
}
editInPlace();