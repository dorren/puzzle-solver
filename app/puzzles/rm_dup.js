// https://www.quora.com/What-are-the-questions-asked-in-an-Amazon-Online-Test-in-HackerRank
//
// Remove the duplicates from the array without extra space.
var RemoveDup = {
  run: (arr) => {
    var arr2 = [];

    for(var i=0; i<arr.length; i++){
      if(arr2.indexOf(arr[i]) == -1){
        arr2.push(arr[i]);
      }
    }
    return arr2;
  },

  // no extra space used.
  run2: (arr) => {
    var len = arr.length;
    for(var i=0; i<len; i++){
      for(var j=i+1; j<len; j++){
        if(arr[i] == arr[j]){
          for(var k=j; k<len-1; k++){
            arr[k] = arr[k+1];
          }
          len -= 1;
        }
      }
    }
    return arr.slice(0, len);
  }
}

export default RemoveDup;
