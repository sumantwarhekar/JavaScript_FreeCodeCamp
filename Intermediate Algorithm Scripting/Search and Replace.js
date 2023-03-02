function myReplace(str, before, after) {
    let correct="";
    if(before[0]>='a'&&before[0]<='z'){
      correct=after[0].toLowerCase();
      let sub = after.substring(1);
      correct=correct.concat(sub);
    }
    if(before[0]>='A'&&before[0]<='Z'){
      correct=after[0].toUpperCase();
      let sub = after.substring(1);
      correct=correct.concat(sub);
    }
    return str.replace(before,correct);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");