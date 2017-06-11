import test from 'ava';
import FourTens from '../../app/puzzles/four_tens';

test("bruteForce()", t => {
  var solver = new FourTens();
  solver.bruteForce();

  t.pass();
});
