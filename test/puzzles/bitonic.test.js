import test from 'ava';
import Bitonic from '../../app/dynamic/bitonic';

test("isBitonic()", t => {
  t.is(Bitonic.isBitonic([1,2,3]), true);
  t.is(Bitonic.isBitonic([3,2,1]), true);
  t.is(Bitonic.isBitonic([1,2,3,2,1]), true);
});

test("run() 1", t => {
  let input = [5, 3, 9, 2, 7, 6, 4];
  t.is(Bitonic.run(input), 19);     // from [2 7 6 4]
});

test("run() 2", t => {
  let input = [5, 4, 3, 2, 1, 10, 6];
  t.is(Bitonic.run(input), 17);     // from [1 10 6]
});

test("run() 3", t => {
  let input = [1,10,2,9,3,8,4,7,5,6];
  t.is(Bitonic.run(input), 16);     // from [4,7,5]
});
