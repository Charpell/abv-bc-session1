'use strict'

module.exports.aritGeo = function(arr){

	let initiaLCommonDiff = arr[1] - arr[0]
	let finalCommonDiff = arr[arr.length-1] - arr[arr.length-2];
	let initialCommonRatio = arr[1] / arr[0];
	let finalCommonRatio = arr[arr.length-1] / arr[arr.length-2];
	
	if(arr.length===0){
		return 0;
	}
	else if(initiaLCommonDiff==finalCommonDiff){
		return "Arithmetic";
	}
	else if(initialCommonRatio==finalCommonRatio){
		return "Geometric";
	}
	else{
		return -1;
	}
}