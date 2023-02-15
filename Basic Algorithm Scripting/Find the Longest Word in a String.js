function findLongestWordLength(str) {
    let longestLength=0;
    let words = str.split(" ");
    for(let i in words){
      if(words[i].length>longestLength)
        longestLength=words[i].length;
    }
    return longestLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");