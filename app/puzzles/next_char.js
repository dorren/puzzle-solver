// nextChar('A') = 'B'
// nextChar('Z') = 'A'
// nextChar('a') = 'b'
// nextChar('z') = 'a'
var nextChar = function(c){
  const Z = 'Z';
  let base = (c <= Z ? 65 : 97); // A's code is 65, a is 97
  return String.fromCharCode((c.charCodeAt() + 1 - base) % 26 + base);
}

export default nextChar;
