import test from 'ava';
import LCS from '../../app/dynamic/lcs';

test("lcs()", t => {
  let a = "ABCDGH";
  let b = "AEDFHR";
  t.is(LCS(a,b), "ADH");
});

test("lcs()", t => {
  let a = "AGGTAB";
  let b = "GXTXAYB";
  t.is(LCS(a,b), "GTAB");
});

test("lcs()", t => {
  let a = "Sunday";
  let b = "Saturday";
  t.is(LCS(a,b), "Suday");
});
