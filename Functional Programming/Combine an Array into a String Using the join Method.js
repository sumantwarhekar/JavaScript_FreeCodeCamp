function sentensify(str) {
    // Only change code below this line
    let words =  str.split(/\W/);
    return words.join(" ");
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");