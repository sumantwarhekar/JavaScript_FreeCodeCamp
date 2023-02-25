function spinalCase(str) {
    let answer = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    answer=answer.toLowerCase().split(/(?:_| )+/);
    return answer.join("-");
  }
  
  // test here
  spinalCase("This Is Spinal Tap");