import test from 'ava';
import WaterJugs from '../../app/puzzles/water_jugs';

test("solve(8,56,46)", t => {
  t.is(WaterJugs.solve(8,56,46), -1);
});

test("solve(3,5,4)", t => {
  t.is(WaterJugs.solve(3,5,4), 6);
});
