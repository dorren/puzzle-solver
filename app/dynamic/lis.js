/**
 * http://www.geeksforgeeks.org/longest-increasing-subsequence/
 *
 * The Longest Increasing Subsequence (LIS) problem is to find the length of
 * the longest subsequence of a given sequence such that all elements of the
 * subsequence are sorted in increasing order.
 *
 * For example, the length of LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80}
 * is 6 and LIS is {10, 22, 33, 50, 60, 80}.
 *
 * @param arr, given array
 * @param m, start index
 * @param n, end index, exclusive
 * @return longest ascending sequence array.
 */
var LIS = {
  _lis: function(arr, m=0, n=arr.length){
    if(n - m == 1){
      return [[arr[m]]];
    }

    let head = arr[m];
    let tails = this._lis(arr, m + 1, n);
    tails.map(tail => {
      if(head < tail[0] ){
        tails.push([head].concat(tail));
      }
    });
    return tails;
  },

  run: function(arr){
    let arrs = this._lis(arr);
    //console.log(arrs.join(" | "));
    let maxLen = 0;
    let result = [];

    arrs.map(x => {
      if(x.length > maxLen){
        maxLen = x.length;
        result = [x];     // overwrite
      }else if(x.length == maxLen){
        result.push(x);   // append
      }
    });

    return result;
  }
}
export default LIS;
