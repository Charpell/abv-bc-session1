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
    
  
// module.exports.findMinMax = function minMax(arr) {
//   var result = []
//   var min = arr.reduce(function(a, b) {
//     if (a <= b) {
//       return a
//     } else {
//       return b
//     }
//   })
//   var max = arr.reduce(function(a, b) {
//     if (a >= b) {
//       return a
//     } else {
//       return b
//     }
//   })
//   result.push(min, max)
//   if (result[0] === result[1]) {
//     result = [result[0]]
//   }
//   return result
// }