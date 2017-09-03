/**
 * http://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/
 *
 * Given a set of integers, the task is to divide it into two sets S1 and S2
 * such that the absolute difference between their sums is minimum.
 *
 * If there is a set S with n elements, then if we assume Subset1 has m elements,
 * Subset2 must have n-m elements and the value of
 * abs(sum(Subset1) – sum(Subset2)) should be minimum.
 *
 * Example:
 * Input:  arr[] = {1, 6, 11, 5}
 * Output: 1
 * Explanation:
 * Subset1 = {1, 5, 6}, sum of Subset1 = 12
 * Subset2 = {11}, sum of Subset2 = 11
 */
var MinDiff = {
  sum: function(arr){
    return arr.reduce((acc, x) => acc + x, 0);
  },

  diff: function(a, b, excluded){
    return Math.abs(this.sum(a) + excluded - this.sum(b));
  },

  partition: function(a, b, excluded=0){
    console.log(a + " | " + b + " | " + excluded);

    if(a.length == 0){
      return [a, b];
    }

    let a1 = a.slice();
    let b1 = b.slice();
    b1.push(a1.pop());
    let pair1 = this.partition(a1, b1, excluded);
    let diff1 = this.diff(...pair1, excluded);

    let a2 = a.slice();
    let b2 = b.slice();
    let x = a2.pop();
    let pair2 = this.partition(a2, b2, excluded + x);
    pair2[0].push(x);
    let diff2 = this.diff(...pair2, excluded);

    if(diff1 < diff2){
      return pair1;
    }else{
      return pair2;
    }
  },

  run: function(arr){
    let result = this.partition(arr, [], 0);
    console.log(result);
    return result;
  }
}

 export default MinDiff;
