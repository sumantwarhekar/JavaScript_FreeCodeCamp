// Only change code below this line
function urlSlug(title) {
    let answer =  title.trim();
    answer = answer.toLowerCase();
    answer = answer.split(/\s+/);
    return answer.join("-");
  }
  // Only change code above this line
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");