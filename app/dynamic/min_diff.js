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
  /* sort the array first, then fill 2nd array with element one by one,
   * and compare 2 arrays' difference with previous difference,
   * stop till difference starts to grow.
   */
  run: function(arr){
    let sum = arr.reduce((acc, x) => acc + x, 0);
    arr.sort((a,b) => a - b);

    let i = arr.length - 1;
    let sum1 = sum;
    let sum2 = 0;
    let last_diff = sum1 - sum2;
    while(i > 0){
      let x = arr[i];
      sum1 -= x;
      sum2 += x;

      if(Math.abs(sum1 - sum2) < last_diff){
        i--;
        last_diff = Math.abs(sum1 - sum2);
      }else{
        i++;
        break;
      }
      //console.log(i + ", " + last_diff);
    }

    return [arr.slice(0,i), arr.slice(i)];
  }
}

 export default MinDiff;
