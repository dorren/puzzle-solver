import test from 'ava';
import MergeSort from '../../app/sort/merge_sort';

MergeSort.logging = false;

test("merge_sort", t => {
  let input  = [5, 1, 3, 2];
  MergeSort.run(input);
  t.deepEqual(input, [1,2,3,5]);
});


test("merge_sort", t => {
  let input  = [12, 11, 13, 5, 6, 7];
  MergeSort.run(input);
  t.deepEqual(input, [5,6,7,11,12,13]);
});
