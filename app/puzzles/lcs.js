// http://www.geeksforgeeks.org/longest-common-subsequence/
//
// find the Longest Common Sequence (LCS) between 2 arrays.
// Examples:
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
var LCS = function(a, b, m=a.length, n=b.length){
  //console.log(a.substring(0,m) + ", " + b.substring(0,n));
  if(m == 0 || n == 0){
    return "";
  }

  if(a[m - 1] == b[n - 1]){
    return LCS(a, b, m - 1, n - 1) + a[m - 1];
  }else {
    let str1 = LCS(a, b, m, n-1);
    let str2 = LCS(a, b, m - 1, n);
    if(str1.length > str2.length){
      return str1;
    }else{
      return str2;
    }
  }
}

export default LCS;
