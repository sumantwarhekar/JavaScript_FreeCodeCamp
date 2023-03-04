function truthCheck(collection, pre) {
    let counter = 0;
    for(let i in collection){
      if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre]))
        counter++;
    }
    return counter==collection.length;
  }
  
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");