testInput =[10,8,7,9,1,5]
function QuickSort( unsortedArray ) {
	var lowerValues = [];
    var higherValues = [];
    
    var temp = [];
  
    var pivotKey = 0;
    var pivotValue = unsortedArray.shift();
    
    for (var i = 0; i < unsortedArray.length; i++) {
      if (parseInt(unsortedArray[i]) <= pivotValue) {
        lowerValues.push(unsortedArray[i]);
		console.log("key and pivotV:", pivotKey,pivotValue)
      } else if (parseInt(unsortedArray[i]) >= pivotValue) {
          higherValues.push(unsortedArray[i]);     
      }
    }
	// start from index
	// fetch value in unsortedArray in order
	// []
    temp[pivotKey] = pivotValue;
    let test = lowerValues.concat(temp,higherValues)

    return test
	
}
QuickSort(testInput)