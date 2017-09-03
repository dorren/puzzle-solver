import test from 'ava';
import SubSum from '../../app/dynamic/sub_sum';

test("subsum()", t => {
  let arr = [3,5,1];
  t.deepEqual(SubSum.run(arr, 4), [[3,1]]);
});

test("subsum()", t => {
  let arr = [3,4,1];
  t.deepEqual(SubSum.run(arr, 3), [[3]]);
});

test("subsum()", t => {
  let arr = [3,5,2];
  t.deepEqual(SubSum.run(arr, 5), [[5],[3,2]]);
});

test("subsum()", t => {
  let arr = [3, 34, 4, 12, 5, 2];
  t.deepEqual(SubSum.run(arr, 9), [[4,5],[3,4,2]]);
});
