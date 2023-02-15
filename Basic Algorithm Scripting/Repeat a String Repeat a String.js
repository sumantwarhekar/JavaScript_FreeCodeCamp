// Solution 1
function repeatStringNumTimes1(str, num) {
    if(num<0)
      return "";
    return str.repeat(num);
  }
  repeatStringNumTimes1("abc", 3);

// Solution 2
function repeatStringNumTimes2(str, num) {
    if(num<0)
      return "";
    let answer="";
    for(let i=0;i<num;i++){
      answer+=str;
    }
    return answer;
  }
  repeatStringNumTimes2("abc", 3);