import test from 'ava';
import Prime from '../../app/puzzles/prime';

test("isPrime()", t => {
  t.is(Prime.isPrime(4), false);
  t.is(Prime.isPrime(5), true);
  t.is(Prime.isPrime(9), false);
  t.is(Prime.isPrime(11), true);
  t.is(Prime.isPrime(53), true);
  t.is(Prime.isPrime(97), true);
  t.is(Prime.isPrime(103), true);
  t.is(Prime.isPrime(557), true);
  t.is(Prime.isPrime(1001), false);
  t.is(Prime.isPrime(10001), false);
  t.is(Prime.isPrime(1260001), false);
  //t.is(Prime.isPrime(33000001), true);
});
