
var MathUtil = {
  /**
   * given input array and target length, generate result permutations.
   * @param arr, input array
   * @param k, target length
   */
  permutations: (arr, k, repeat=false) => {
    if(k == 1){
      return arr.map( x => { return [x]; });
    }

    var result = [];
    for (let i = 0; i < arr.length; i++) {
      var tail = arr.slice();

      if(repeat){
        var head = tail.slice(i, i+1); // don't remove
      }else{
        var head = tail.splice(i, 1);
      }
      var tails = MathUtil.permutations(tail, k-1, repeat);

      tails.map(tail => {
        result.push(head.concat(tail));
      });
    };

    return result;
  },

  /**
   * generate result permutations with repeats.
   * @param arr, input array
   * @param k, target length
   */
  permutationsWithRepeat: (arr, k) => {
    return MathUtil.permutations(arr, k, true);
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
  },

  combinations2: (arr) => {
    return(
      arr.reduceRight((acc, x) => {
        return acc.concat(
          acc.reduce((acc2, y)=>{
            acc2.push([x].concat(y));
            return acc2;
          }, [])
        );
      }, [[]])
    );
  }
}

export default MathUtil;
