/**
 * http://practice.geeksforgeeks.org/problems/maximum-bitonic-subarray-sum/0
 *
 * Given an array containing N numbers. The task is to find the maximum sum
 * bitonic subarray. A bitonic subarray is a subarray in which elements are
 * first increasing and then decreasing. A strictly increasing or strictly
 * decreasing subarray is also considered as bitonic subarray.
 *
 * [5 3 9 2 7 6 4] => 19, from [2 7 6 4]
 * [5 4 3 2 1 10 6] => 17, from [1 10 6]
 */
class Bitonic {
  constructor(){
    this.resetCache();
  }

  /**
   * @param arr, input number array
   * @param s, starting index, inclusive
   * @param e, ending index, exclusive
   * @return sum
   */
  sum(arr, s, e){
    return arr.reduce((acc,x, i) => {
      if(i>=s && i < e){
        return acc + x;
      }else{
        return acc;
      }
    }, 0);
  }

  /**
   * @param arr, input number array
   * @param s, starting index, inclusive
   * @param e, ending index, exclusive
   * @return true/false
   */
  static isBitonic(arr, s=0, e=arr.length) {
    let isValid = true;
    let state = 0;

    for(let i=s; i<e-1; i++){   // incresing then decreasing
      if(state === 0){
        if(arr[i] > arr[i+1]){ state = 1; }
      }else{
        if(arr[i] < arr[i+1]){
          isValid = false;
          break;
        }
      }
    }

    return isValid;
  }

  resetCache(){
    this.cache = {};
  }

  /**
   * @param arr, input number array
   * @param s, starting index, inclusive
   * @param e, ending index, exclusive
   * @return true/false
   */
  cachedIsBitonic(arr, s, e) {
    let val = this.cache[[s, e]];
    if( val !== undefined ){ return val; }

    let isValid = this.constructor.isBitonic(arr, s, e);

    this.cache[[s,e]] = isValid;
    return isValid;
  }

  /**
   * @param arr, input number array
   * @param s, starting index, inclusive
   * @param e, ending index, exclusive
   * @return the sum of the bitonic array.
   */
  _run(arr, s, e){
    if(this.cachedIsBitonic(arr, s, e)){
      return this.sum(arr, s, e);
    }else{
      let sum1 = this._run(arr, s+1, e);    // cut head
      let sum2 = this._run(arr, s, e-1);    // cut tail

      return Math.max(sum1, sum2);
    }
  }

  /**
   * @param arr, input number array
   * @return the sum of the bitonic array.
   */
  static run(arr){
    let bitonic = new Bitonic();
    return bitonic._run(arr, 0, arr.length);
  }
}

export default Bitonic;
