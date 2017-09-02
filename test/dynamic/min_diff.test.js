import test from 'ava';
import MinDiff from '../../app/dynamic/min_diff';

test("MinDiff()", t => {
  let arr = [1,6,11,5];
  t.deepEqual(MinDiff.run(arr), [[1,5,6],[11]]);
});
