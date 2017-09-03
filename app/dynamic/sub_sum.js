// http://www.geeksforgeeks.org/dynamic-programming-subset-sum-problem/
//
// Given a set of non-negative integers, and a value sum, determine if there
// is a subset of the given set with sum equal to given sum.
//
// Examples: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
// Output:  True  //There is a subset (4, 5) with sum 9.
var SubSum = {
  sum: function(arr){
    return arr.reduce((acc, x) => acc + x, 0);
  },

  reduce: function(arr, s){
    if(s < 0){
      return [];
    }
    if(arr.length == 0 && s > 0){
      return [];
    }
    if(s == 0){
      return [[]];
    }

     // exclude head
    let tails = this.reduce(arr.slice(1), s);

    // include head
    let tails2 = this.reduce(arr.slice(1), s - arr[0]);
    tails2.map(tail => tail.unshift(arr[0]) );
    tails = tails.concat(tails2);

    return tails;
  },

  run: function(arr, s){
    let output = this.reduce(arr, s);
    //console.log("output", output);
    return output;
  }
}

export default SubSum;
