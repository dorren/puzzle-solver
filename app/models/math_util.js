
var MathUtil = {
  /**
   * given input array and target length, generate result permutations.
   */
  permutations: (arr, targetLength, repeat = false) => {
    var result = [];

    const permutates = (arr, targetLength, memo = []) => {
      if(memo.length == targetLength){
        result.push(memo);
      }else {
        for (let i = 0; i < arr.length; i++) {
          var tail = arr.slice();

          if(repeat) { // use repeated elements
            var head = tail.slice(i, i+1);
          } else {
            var head = tail.splice(i, 1);
          }
          permutates(tail.slice(), targetLength, memo.concat(head));
        }
      }
    };

    permutates(arr, targetLength);
    return result;
  },

  /**
   * generate result permutations with repeats.
   */
  permutationsWithRepeat: (arr, targetLength) => {
    return MathUtil.permutations(arr, targetLength, true);
  },

  /**
   * returns k-combinations. Unlike permutations, ordering doesn't matter.
   *
   * for example, combinations([1,2,3], 2) returns
   *   [[1,2],
   *    [1,3],
   *    [2,3]]
   */
  kCombinations: (arr, k) => {
    if(k == 1){
      return arr.map((x) => { return [x]; });  // return every elem as array
    }

    var result = [];
    for (let i = 0; i < arr.length + 1 - k; i++) {
      var head = arr[i];
      var tails = MathUtil.kCombinations(arr.slice(i + 1), k-1);

      for (var j = 0; j < tails.length; j++) {
        result.push([head].concat(tails[j]));
      }
    };

    return result;
  },

  /**
   * returns all possbile combinations.
   *
   * for example, combinations([1,2,3]) returns
   *   [[1], [2], [3],
   *    [1,2], [1,3], [2,3],
   *    [1,2,3]]
   */
  combinations: (arr) => {
    var result = [];

    for (let i = 1; i <= arr.length; i++) {
      var kCombs = MathUtil.kCombinations(arr, i);
      result = result.concat(kCombs);
    }

    return result;
  }
}


export default MathUtil;
