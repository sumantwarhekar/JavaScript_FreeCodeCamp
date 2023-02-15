// Solution 1
function confirmEnding1(str, target) {
    return str.endsWith(target);
  }
  
confirmEnding("Bastian", "n");

// Solution 2
function confirmEnding2(str, target) {
    let length=target.length;
    let subString = str.substring(str.length-length);
    if(target==subString)
      return true;
    return false;
  }
  
  confirmEnding("Bastian", "n");