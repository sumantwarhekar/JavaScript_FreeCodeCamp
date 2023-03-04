function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let answer=[];
    for(let i in arr){
      const orbitalPer = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM)
      );
      
      answer.push({name: arr[i].name, orbitalPeriod: orbitalPer} );
    }
    return answer;
  }
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);