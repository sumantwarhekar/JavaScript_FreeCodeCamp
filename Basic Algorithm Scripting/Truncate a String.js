function truncateString(str, num) {
    if(num>=str.length)
      return str;
    let answer="";
    for(let i=0;i<num;i++){
      answer+=str.charAt(i);
    }
    return answer+"...";
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);