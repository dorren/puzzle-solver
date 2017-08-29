import test from 'ava';
import FibonacciSum from '../../app/puzzles/fibonacci';

test("fibonacciSum()", t => {
  t.is(FibonacciSum(10), 10);  // 2 + 8
  t.is(FibonacciSum(100), 44); // 2 + 8 + 44
});
