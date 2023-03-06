function convertToRoman(num) {
    let romanValues = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']];
  
    if(num === 0)
      return '';
  
    for (let i = 0; i < romanValues.length; i++){
      if(num >= romanValues[i][0]){
        return romanValues[i][1] + convertToRoman(num - romanValues[i][0]);
      }
    }
   return num;
  }
  
  convertToRoman(36);