import test from 'ava';
import nextChar from '../../app/puzzles/next_char';

test("nextChar()", t => {
  t.is(nextChar('A'), 'B');
  t.is(nextChar('Z'), 'A');
  t.is(nextChar('a'), 'b');
  t.is(nextChar('z'), 'a');
});
