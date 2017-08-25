import test from 'ava';
import MathUtil from '../../app/four_tens/math_util'

test("permutations with repeat", t => {
  var input = ["a", "b", "c"];
  var output =  [ [ "a", "a" ],
                  [ "a", "b" ],
                  [ "a", "c" ],
                  [ "b", "a" ],
                  [ "b", "b" ],
                  [ "b", "c" ],
                  [ "c", "a" ],
                  [ "c", "b" ],
                  [ "c", "c" ] ];

  t.deepEqual(MathUtil.permutationsWithRepeat(input, 2), output);
});

test("permutations 2", t => {
  var input = ["a", "b", "c"];
  var output =  [ [ "a", "b" ],
                  [ "a", "c" ],
                  [ "b", "a" ],
                  [ "b", "c" ],
                  [ "c", "a" ],
                  [ "c", "b" ] ];
  t.deepEqual(MathUtil.permutations(input, 2), output);
});

test("permutations 3", t => {
  var input = ["a", "b", "c"];
  var output =  [ [ "a", "b", "c" ],
                  [ "a", "c", "b" ],
                  [ "b", "a", "c" ],
                  [ "b", "c", "a" ],
                  [ "c", "a", "b" ],
                  [ "c", "b", "a" ] ];
  t.deepEqual(MathUtil.permutations(input, 3), output);
});

test("kCombinations, length 1", t => {
  var input = [...Array(4).keys()]; // [0,1,2,3]

  var expected = [[0], [1], [2], [3]];
  var output = MathUtil.kCombinations(input, 1);
  t.deepEqual(output, expected);
});

test("kCombinations, length 2", t => {
  var input = [...Array(4).keys()]; // [0,1,2,3]

  var expected = [ [0,1], [0,2], [0,3], [1,2], [1,3], [2,3]];
  var output = MathUtil.kCombinations(input, 2);
  t.deepEqual(output, expected);
});

test("combinations", t => {
  var input = [...Array(3).keys()]; // [0,1,2]
  var expected = [[0], [1], [2],
                  [0,1], [0,2], [1,2],
                  [0,1,2] ];

  var output = MathUtil.combinations(input);
  t.deepEqual(output, expected);
});
