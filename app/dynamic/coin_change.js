// http://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/
//
// Given a value N, if we want to make change for N cents, and we have infinite
// supply of each of S = { S1, S2, .. , Sm} valued coins, how many ways can we
// make the change? The order of coins doesn’t matter.
//
// For example, for N = 4 and S = {1,2,3}, there are four solutions:
// {1,1,1,1},{1,1,2},{2,2},{1,3}. So output should be 4.
//
// For N = 10 and S = {2, 5, 3, 6}, there are five solutions:
// {2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}. So the output should be 5.

var CoinChange = {
  /**
   * @param coins, coins
   * @param t, total
   */
  reduce: function(coins, t){
    //console.log("A ", coins, t);
    if(t < 0){
      return [];
    }
    if(coins.length == 0 && t > 0){
      return [];
    }
    if(t == 0){
      return [[]];
    }

    // exclude head
    let tails = this.reduce(coins.slice(1), t);
    //console.log("B f(", coins.slice(1), t, ")= ", tails);

    // include head
    let head = coins[0];
    let tails2 = this.reduce(coins, t - head);
    //console.log("C ", head, " f(", coins, t-head, ")= ", tails2);
    tails2.map(tail => { tail.unshift(head); });
    tails = tails.concat(tails2);

    return tails;
  },

  run: function(coins, total){
    let output = this.reduce(coins, total);
    return output;
  },

  // count the possible solutions
  occur: function(coins, t){
    if(t < 0){
      return 0;
    }
    if(coins.length == 0 && t > 0){
      return 0;
    }
    if(t == 0){
      return 1;
    }

    // exclude head
    let count = this.occur(coins.slice(1), t);

    // include head
    let count2 = this.occur(coins, t - coins[0]);

    return count + count2;
  },
};

export default CoinChange;
