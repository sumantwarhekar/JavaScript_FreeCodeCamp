function checkCashRegister(price, cash, cid) {
    //initialization of the status and the change array
    var change=[
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];
    //computation of the due change and total cash in CID
    var changeDue = toPrecise(cash-price);
    var totalCash = toPrecise(cid.map(element => element[1]).reduce((a,b) =>a+b));
    //Exit case : if there isn't enough money in CID
    if(toPrecise(changeDue-totalCash)>0){
      return {status:"INSUFFICIENT_FUNDS", change:[]};
  
    } else{
      //for each type of money...
      for(let i=cid.length-1;i>=0; i--){
        //while there is still money in the cid, change to give, and change - current money is positive
          while(cid[i][1]>0
          &&changeDue>0
          &&toPrecise(changeDue-currencyToAmount(cid[i][0]))>=0){
            change[i][1]=change[i][1]+currencyToAmount(cid[i][0]);
            cid[i][1]=toPrecise(cid[i][1]-currencyToAmount(cid[i][0]));
            changeDue=toPrecise(changeDue-currencyToAmount(cid[i][0]));
          }
        }
      }
      //re computation of the total cash in CID
      totalCash=cid.map(element => element[1]).reduce((a,b) =>a+b);
      //If there is still change due after :
      if(changeDue>0&&totalCash!=0){
        return {status:"INSUFFICIENT_FUNDS", change:[]};
      //If all the cash is given :
      } else if(toPrecise(changeDue-totalCash)==0){
        return {status:"CLOSED",change:change
      .map(element => [element[0], parseFloat(toPrecise(element[1]))])};
      //If there is still cash in the cid after giving the change :
      } else{
          return {status:"OPEN", change:change.filter(element => element[1]!=0).reverse()};
      }
  }
  
  function toPrecise(expression){
    return expression.toFixed(2);
  }
  
  function currencyToAmount(name){
    switch(name){
      case "PENNY":	
        return 0.01;
      case "NICKEL":	
        return 0.05;
      case "DIME":	
        return 0.1;
      case "QUARTER":	
        return 0.25;
      case "ONE":
        return 1;
      case "FIVE":	
        return 5;
      case "TEN":	
        return 10;
      case "TWENTY":
        return 20;
      case "ONE HUNDRED": 
        return 100;
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));