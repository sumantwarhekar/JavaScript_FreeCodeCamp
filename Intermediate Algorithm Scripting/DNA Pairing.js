function pairElement(str) {
    let letters = str.split("");
    let answer=[];
    for(let i=0;i<letters.length;i++){
      if(letters[i]=='A')
        answer.push(["A","T"]);
      else if(letters[i]=='T')
        answer.push(["T","A"]);
      else if(letters[i]=='C')
        answer.push(["C","G"]);
      else if(letters[i]=='G')
        answer.push(["G","C"]);
    }
    return answer;
  }
  
  pairElement("GCG");