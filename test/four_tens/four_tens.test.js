import test from 'ava';
import FourTens from '../../app/four_tens/four_tens';

test.skip("bruteForce()", t => {
  var solver = new FourTens();
  solver.bruteForce();

  t.pass();
});
