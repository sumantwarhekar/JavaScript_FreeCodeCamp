function reverseString(str) {
    let words = str.split("");
    return words.reverse().join("");
  }
  
  reverseString("hello");