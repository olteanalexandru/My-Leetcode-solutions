/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1: string, word2: string): string {

    let  firstStr = word1.split("");
     let secondStr = word2.split("");
     let result = "";
  
     for(let i = 0; i < firstStr.length || i < secondStr.length; i++){
         if(i < firstStr.length){
             result += firstStr[i];
         }
         if(i < secondStr.length){
             result += secondStr[i];
         }
     }
  
     return result;
  
  };