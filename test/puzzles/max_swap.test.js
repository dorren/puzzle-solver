import test from 'ava';
import MaxSwap from '../../app/puzzles/max_swap';

test("swap()", t => {
  t.deepEqual(MaxSwap.swap([1,2,3,4], 2), [1,3,2,4]);
  t.deepEqual(MaxSwap.swap([1,2,3,4], 3, 2), [1,4,2,3]);
});

test("run()", t => {
  t.deepEqual(MaxSwap.run([1,2,4,3], 2), [4,1,2,3]);
  t.deepEqual(MaxSwap.run([1,2,4,3], 4), [4,3,1,2]);
  t.deepEqual(MaxSwap.run([1,2,4,3], 5), [4,3,2,1]);
});
