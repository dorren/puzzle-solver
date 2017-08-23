// https://www.quora.com/What-are-the-questions-asked-in-an-Amazon-Online-Test-in-HackerRank
//
// A swap operation M on an array is defined where you can only swap the
// adjacent elements. Given an array containing digits and n swap
// operations(defined as below), maximize the value of the array.
//
// Example: Array 1, 2, 4, 3 (value = 1243), Number of swaps 2
// Output 4,1,2,3 (value = 4123).
var MaxSwap = {
  run: (arr, n) =>{
    if(n == 0){
      return arr;
    }

    var max = Math.max.apply(null, arr);
    var maxIndex = arr.indexOf(max);

    var step = Math.min(n, maxIndex);
    n = n - step;
    var arr2 = MaxSwap.swap(arr, maxIndex, step);

    // return head and recursively process the tail.
    var result = arr2.slice(0,1).concat(MaxSwap.run(arr2.slice(1), n));
    return result;
  },

  // move element at index towards index 0 n steps
  swap: (array, index, n=1) => {
    for(var i=0; i < n; i++){
      var temp = array[index];
      array[index] = array[index-1];
      array[index-1] = temp;
      index -= 1;
    }

    return array;
  }
}

export default MaxSwap;
