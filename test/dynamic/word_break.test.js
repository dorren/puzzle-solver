import test from 'ava';
import WordBreak from '../../app/dynamic/word_break';

WordBreak.logging = false;

test("run()", t => {
  let dict = ["snake", "snakes", "and", "sand", "ladder"];
  let input = "snakesandladder";
  let output = ["snakes and ladder", "snake sand ladder"];

  t.deepEqual(WordBreak.run(dict, input), output);
});
