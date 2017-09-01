import test from 'ava';
import LIS from '../../app/dynamic/lis';

test("lis()", t => {
  let arr = [0, 2, 1, 3];
  let output = LIS.run(arr);
  t.deepEqual(output, [[0, 1, 3],
                       [0, 2, 3]]);
});

test("lis()", t => {
  let arr = [5, 2, 7, 3, 6, 9];
  let output = LIS.run(arr);
  t.deepEqual(output, [[2, 3, 6, 9]]);
});

test("lis()", t => {
  let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
  let output = LIS.run(arr);
  t.deepEqual(output, [[10, 22, 33, 41, 60, 80],
                       [10, 22, 33, 50, 60, 80]]);
});
