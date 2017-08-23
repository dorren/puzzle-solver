import test from 'ava';
import BracketReversal from '../../app/puzzles/bracket_reversal';

test("run()", t => {
  t.is(BracketReversal.run("}{"), 2);
  t.is(BracketReversal.run("{{{"), -1);
  t.is(BracketReversal.run("{{{{"), 2);
  t.is(BracketReversal.run("{{{{}}"), 1);
  t.is(BracketReversal.run("}{{}}{{{"), 3);
});
