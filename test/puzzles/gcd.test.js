import test from 'ava';

var gcd = function(a, b){
  //console.log(a, b);
  if(a > b){
    a += b;
    b = a - b;
    a -= b;
  }
  if(a == 0) { return b; }
  return gcd(a, b % a);
};

test("gcd()", t => {
  t.is(gcd(5,3), 1);
  t.is(gcd(9,6), 3);
  t.is(gcd(77,42), 7);
});
