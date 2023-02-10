function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const answer = rangeOfNumbers(startNum, endNum - 1);
      answer.push(endNum);
      return answer;
    }
  }