import test from 'ava';
import MinDiff from '../../app/dynamic/min_diff';


test("MinDiff()", t => {
  let arr = [1,6,11,5];
  t.deepEqual(MinDiff.run(arr), [[1,6,5],[11]]);
});

test("MinDiff()", t => {
  let arr = [1,6,4];
  t.deepEqual(MinDiff.run(arr), [[1,4],[6]]);
});

test("MinDiff()", t => {
  let arr = [1,-1];
  t.deepEqual(MinDiff.run(arr), [[1,-1],[]]);
});
