import test from 'ava';
import CoinChange from '../../app/dynamic/coin_change';


test("coin change()", t => {
  let coins = [1,2];
  t.deepEqual(CoinChange.run(coins, 2), [[2], [1,1]]);
  t.is(CoinChange.occur(coins, 2), 2);
});



test("coin change()", t => {
  let coins = [1,2,3];
  let output = [[2,2],[1,3],[1,1,2],[1,1,1,1]];
  t.deepEqual(CoinChange.run(coins, 4), output);
  t.is(CoinChange.occur(coins, 4), 4);
});
