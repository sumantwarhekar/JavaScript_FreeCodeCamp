function palindrome(str) {
    let cleanStr="";
    let lower = str.toLowerCase();
    for(let i=0;i<lower.length;i++){
      if((lower[i]>="a"&&lower[i]<="z")||(lower[i]>="1"&&lower[i]<="9")){
        cleanStr+=lower[i]
      }
    }
    let reverse=cleanStr.split("").reverse().join("");
    if(cleanStr===reverse)
      return true;
    else
      return false;
  }
  
  palindrome("1 eye for of 1 eye.");