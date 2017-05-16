'use strict'

module.exports.findMinMax = function(arr){

   let min = arr[0];
   let max = arr[0];
   //let first = arr[0]
 
  
  
  for(let i = 1; i<arr.length; i++){

  	//Get Minimum Number
    if (arr[i] < min){
      min = arr[i]; 
    }

  	//Get Minimum Number
    else if (arr[i] > max){
      max = arr[i];
    } 

    // // Check for Uniformity
    // else if(arr[i] === first){
    // 	first = arr[i]

    // }
       
  }
  return [min, max];
    }
    
  
