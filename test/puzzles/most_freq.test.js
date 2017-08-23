import test from 'ava';
import mostFreq from '../../app/puzzles/most_freq';

test("most_freq()", t => {
  t.is(mostFreq.run([1,2]), "1:1");
  t.is(mostFreq.run([1,2,3,4,3]), "3:2");
  t.is(mostFreq.run([5,5,1,2,3,4,3]), "3:2");
});
