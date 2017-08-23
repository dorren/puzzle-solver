// http://www.geeksforgeeks.org/minimum-number-of-bracket-reversals-needed-to-make-an-expression-balanced/
//
// Input:  exp = "}{"
// Output: 2
// We need to change '}' to '{' and '{' to
// '}' so that the expression becomes balanced,
// the balanced expression is '{}'
//
// Input:  exp = "{{{"
// Output: -1, Can't be made balanced using reversals
//
// Input:  exp = "{{{{"
// Output: 2
//
// Input:  exp = "{{{{}}"
// Output: 1
//
// Input:  exp = "}{{}}{{{"
// Output: 3
var BracketReversal = {
  run: (exp) => {
    if(exp.length % 2 != 0){
      return -1;
    }

    var arr = [exp[0]];
    for(var i=1; i<exp.length; i++){
      if(arr[arr.length-1] == "{" && exp[i] == "}"){
        arr.pop();        // remove matched pairs
      }else{
        arr.push(exp[i]);
      }
    }

    var left = 0; // count "{"
    arr.map( x => {
      if(x == "{"){ left += 1; }
    });

    var right = arr.length - left;
    var num = Math.ceil(left/2) + Math.ceil(right/2);

    return num;
  }
}

export default BracketReversal;
