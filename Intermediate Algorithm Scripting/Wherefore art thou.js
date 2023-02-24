function whatIsInAName(collection, source) {
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
      let found = true;
      for (const sourceProp in source) {
        if (collection[i][sourceProp] !== source[sourceProp]){
          found=false;
          break;
        }
      }
      if(found)
        arr.push(collection[i]);
    }
    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));