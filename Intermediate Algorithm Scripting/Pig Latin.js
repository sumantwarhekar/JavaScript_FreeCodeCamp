function translatePigLatin(str) {
    if(str.charAt(0)=='a'||str.charAt(0)=='e'||str.charAt(0)=='i'||str.charAt(0)=='o'||str.charAt(0)=='u'){
      return str.concat("way");
    }
      else{
        let indx=0;
        for(let i=0;i<str.length;i++){
          if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'){
            indx=i;
            break;
          }
          else{
            indx++;
          }
        }
        let first = str.substring(indx,str.length);
        let second = str.substring(0,indx);
        let answer = first.concat(second);
        return answer.concat("ay");
      }
  }
  
  translatePigLatin("consonant");