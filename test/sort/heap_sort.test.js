import test from 'ava';
import HeapSort from '../../app/sort/heap_sort';

test("heapify", t => {
  let input  = [1, 8, 3, 9, 4, 5, 7, 2];
  let output = [9, 8, 7, 2, 4, 5, 3, 1];

  HeapSort.buildHeap(input);
  t.deepEqual(input, output);
});

test("heapify", t => {
  let input  = [1, 8, 3, 9, 4, 5, 7, 2];
  let output = [1, 2, 3, 4, 5, 7, 8, 9];

  HeapSort.sort(input);
  t.deepEqual(input, output);
});
