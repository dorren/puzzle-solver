import test from 'ava';
import RemoveDup from '../../app/puzzles/rm_dup';

test("run()", t => {
  t.deepEqual(RemoveDup.run([1,2,4,3,2]), [1,2,4,3]);
});

test("run2()", t => {
  t.deepEqual(RemoveDup.run2([1,2,4,3,2]), [1,2,4,3]);
  t.deepEqual(RemoveDup.run2([1,2,4,2,3,2,3]), [1,2,4,3]);
});
