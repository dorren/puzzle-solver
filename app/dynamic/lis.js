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
 * @return longest ascending sequence array.
 */
var LIS = {
  all: function(arr, compareFn){
    return arr.reduce((acc, x) => {
      return acc && compareFn(x);
    }, true);
  },

  lis: function(arr){
    if(arr.length <= 1){
      return [arr];
    }

    let head = arr[0];
    let tails = this.lis(arr.slice(1));
    //console.log("B", head, tails);

    let maxLen = 0;
    let result = [];
    tails.map( tail => {
      let tail2 = null;
      if(head < tail[0]){
        tail.unshift(head);
      }else if(head < tail[1]){
        tail2 = tail.slice();
        tail2[0] =(head);     // replace tail[0] with head
      }
      //console.log("B.  ", tail, tail2, result);
      if(tail.length > maxLen){
        result = [tail];
        maxLen = tail.length;
      }else if (tail.length == maxLen){
        result.push(tail);
      }
      if(tail2 && tail2.length >= maxLen){
        result.push(tail2);
      }
      //console.log("B... ", tail, tail2, result);
    });

    //console.log("C    ", result);
    return result;
  },

  run: function(arr){
    return this.lis(arr);
  }
}
export default LIS;
