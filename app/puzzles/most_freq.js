// https://www.quora.com/What-are-the-questions-asked-in-an-Amazon-Online-Test-in-HackerRank
//
// Given an integer array, find the most frequent number and it's count in the array. Write the
// code in O(1) space. Eg 1 , 3, 4, 5, 2, 2, 3, 2 Output Most frequent number is 2. The
// frequency is 3. Return the output as string in 'number: frequency' format. e.g. 2: 3 (Please
// note the space after : and frequency. If multiple numbers have the same highest frequency
// return the smallest number.
var MostFreq = {
  run: (arr) => {
    var h = {};
    for(var i=0; i< arr.length; i++){
      if(h[arr[i]] == undefined){
        h[arr[i]] = 0;
      }
      h[arr[i]] += 1;
    }

    var freq = MostFreq.max_freq(h);
    var key  = MostFreq.getKeyByValue(h, freq);
    var result = "" + key + ":" + freq;
    return result;
  },

  // return the lagest hash value.
  max_freq: (hash) => {
    var max =0;
    Object.keys(hash).forEach(key => {
      if(hash[key] >= max){
        max = hash[key];
      }
    });
    return max;
  },

  // return the smallest hash key by given hash value.
  getKeyByValue: (hash, value) => {
    var keys = Object.keys(hash).filter(key => hash[key] === value);

    var min = Math.min.apply(null, keys); // return smallest key
    return min;
  }

};

export default MostFreq;
