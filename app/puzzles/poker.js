var Poker  = {
  ranks:  {"highValue": 0,
           "pair": 1,
           "twoPair": 2,
           "three": 3,
           "straight": 4,
           "flush": 5,
           "fullhouse":6,
           "four":7,
           "straightFlush":8,
           "royalFlush": 9
         },

  // check if 2 array is the same
  deepEqual: function(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    var match = true;
    for(let i in arr1){
        if(arr1[i] != arr2[i]){
            match = false;
            break;
        }
    }
    return match;
  },

  // @param val, 1 character number value only
  // @return index, value index in 13 values. used to compare hands
  valueIndex: function(val){
      var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
      return values.indexOf(val);
  },

  // sort hand in the order of 1,2,3...10, J, Q, K, A
  sortHand: function(hand){
      var result = hand.sort((a, b) => {
          let index1 = this.valueIndex(a[0]);
          let index2 = this.valueIndex(b[0]);
          return index1 - index2;
      })
      return result;
  },



  // compare same ranked/type hand, to see which one has high card.
  //
  // return < 0, right one is bigger,
  //        == 0, equal
  //        > 1, left one is bigger
  compareHighCard: function(hand1, hand2){
    if(hand1.length == 1 && hand2.length == 1){
      let v1 = hand1[0][0];
      let v2 = hand2[0][0];
      return this.valueIndex(v1) - this.valueIndex(v2);
    }else{
      var h1 = this.sortHand(hand1);
      var h2 = this.sortHand(hand2);

      // compare last card.
      let v1 = h1.slice(-1)[0][0];
      let v2 = h2.slice(-1)[0][0];
      if( v1 == v2 ){
          let len = hand1.length;
          return this.compareHighCard(h1.slice(0, len - 1), h2.slice(0, len - 1));
      }else{
          return this.valueIndex(v1) - this.valueIndex(v2);
      }
    }
  },

  // return frequencies of card.
  // full house is [2, 3]
  // 2 pair, [1,2,2]
  //
  frequencies: function(vals){
    let hash = {};

    vals.map(x => {
        let val = x;
        if(hash[val] == undefined){
            hash[val] = 1;
        }else{
            hash[val] += 1;
        }
    });

    let counts = [];
    Object.keys(hash).forEach(key => {
        counts.push(hash[key]);
    });

    return counts.sort();
  },


  isFlush: function(hand){
    let suits = hand.map(x => {return x[1]});
    let freq = this.frequencies(suits);

    return freq.length == 1;
  },

  isStraight: function(hand){
      let h = this.sortHand(hand);
      let vals = h.map(x => {return x[0];});

      let is_straight = true;
      for(let i=0; i< vals.length-1; i++){
          var diff = this.valueIndex(vals[i+1]) - this.valueIndex(vals[i]);
          if(diff != 1){
              is_straight = false;
              break;
          }
      }
      return is_straight;
  },

  maxValue: function(hand){
    return this.sortHand(hand).slice(-1)[0][0];
  },

  // return type of hand, "pair", "flush", etc
  getRank: function(hand){
      let vals = hand.map(x => {return x[0]});
      let freq = this.frequencies(vals);
      let maxFreq = Math.max.apply(null, freq);

      if(this.isFlush(hand)){
        if(this.isStraight(hand)){
            if(this.maxValue == 'A'){
              return this.ranks.royalFlush;
            }else{
              return this.ranks.straightFlush;
            }
        }else{
            return this.ranks.flush;
        }
      }

      if(this.isStraight(hand)){
          return this.ranks.straight;
      }

      if(maxFreq == 1){
          return this.ranks.highValue;
      }else if(maxFreq == 2){
        if(this.deepEqual(freq, [1,2,2])){
            return this.ranks.twoPair;
        } else {
            return this.ranks.pair;
        }
      }else if(maxFreq == 3){
          if(this.deepEqual(freq, [2,3])){
              return this.ranks.fullhouse;
          }else{
              return this.ranks.three;
          }
      }else if(maxFreq == 4){
          return this.ranks.four;
      }
  },

  // main fn
  compareCards: function(arr1, arr2){
      var rank1 = this.getRank(arr1);
      var rank2 = this.getRank(arr2);

      if(rank1 < rank2){
          return "right";
      }else if(rank1 == rank2){
          var result = this.compareHighCard(arr1, arr2);
          if(result < 0){
              return "right";
          }else if(result == 0){
              return "none";
          }else if(result > 0){
              return "left";
          }
      }else if (rank1 > rank2){
          return "left";
      }
  }
}

export default Poker;
