function fearNotLetter(str) {
  for(let i=0;i<str.length;i++){
    let char = str.charCodeAt(i);
    if (char !== str.charCodeAt(0) + i){
      return String.fromCharCode(char - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");