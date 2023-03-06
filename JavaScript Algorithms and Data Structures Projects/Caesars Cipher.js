function rot13(str) {
    let answer="";
    for(let i=0;i<str.length;i++){
      if(str.charAt(i)>='A'&& str.charAt(i)<='M'){
        let char = str.charCodeAt(i);
        char = char+13;
        answer = answer.concat(String.fromCharCode(char));
      }
      else if(str.charAt(i)>='N'&& str.charAt(i)<='Z'){
        let char = str.charCodeAt(i);
        char = char-13;
        answer = answer.concat(String.fromCharCode(char));
      }
      else{
        answer = answer.concat(str.charAt(i));
      }
    }
    return answer;
  }
  
  rot13("SERR PBQR PNZC");