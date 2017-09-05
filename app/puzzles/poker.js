var Poker  = {
  ranks:  {"highValue": 0,
           "pair":      1,
           "twoPair":   2,
           "three":     3,
           "straight":  4,
           "flush":     5,
           "fullhouse": 6,
           "four":      7,
           "straightFlush":8,
           "royalFlush":   9
         },

  // check if 2 array is the same
  deepEqual: function(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }

    return arr1.reduce(
             (acc, a, i) => acc && a == arr2(i),
             true);
  },

  // @param val, 1 character number value only
  // @return index, value index in 13 values. used to compare hands
  valueIndex: function(val){
      var values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
      return values.indexOf(val);
  },

  // sort hand in the order of 1,2,3...10, J, Q, K, A
  sortHand: function(hand){
      return hand.sort((a, b) => this.valueIndex(a[0]) - this.valueIndex(b[0]));
  },

  // compare same ranked/type hand, to see which one has high card.
  //
  // return < 0, right one is bigger,
  //        == 0, equal
  //        > 1, left one is bigger
  compareHighCard: function(hand1, hand2){
    let vals1 = hand1.map(x => x[0] );
    let vals2 = hand2.map(x => x[0] );
    // sort by frequency values.
    let freqKV1 = this.frequencies(vals1).sort((a, b) => a[1] - b[1] );
    let freqKV2 = this.frequencies(vals2).sort((a, b) => a[1] - b[1] );

    let result = 0;
    while(result == 0 && freqKV1.length > 0){
      let k1 = freqKV1.pop()[0];
      let k2 = freqKV2.pop()[0];

      result = this.valueIndex(k1) - this.valueIndex(k2);
    }
    return result;
  },

  /**
   * given input array, return result frequencies in 2D array,
   * where each item of subarray consists of key and frequency. Eg,
   *
   *  ['a', 'b', 'b', 'c', 'c', 'c'] => [['a',1],['b', 2], ['c', 3]]
   *
   * reason to use 2D array is easy to sort, can be easilly sort by
   * either key or frequency.
   *
   * @param vals, input array
   * @return frequency 2D array, [[key, freq], [key, freq], ...]
   */
  frequencies: function(arr){
    let hash = arr.reduce((h, x) => { // count element frequency
                 h[x] = h[x] == undefined ? 1 : h[x] + 1;
                 return h;
               }, {});

    let freqs = [];            // convert hash to 2D array.
    Object.keys(hash).sort().forEach(key => {
        freqs.push([key, hash[key]]);
    });

    return freqs;
  },


  isFlush: function(hand){
    let suits = hand.map(x => {return x[1]});
    let freq = this.frequencies(suits);

    return freq.length == 1;
  },

  isStraight: function(hand){
      let h = this.sortHand(hand);
      let vals = h.map(x => this.valueIndex(x[0]) );

      let is_straight = true;
      for(let i=0; i< vals.length-1; i++){
          if(vals[i+1] - vals[i] != 1){
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
    if(this.isFlush(hand)){
      if(this.isStraight(hand)){
          if(this.maxValue(hand) == 'A'){
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

    let vals = hand.map(x => {return x[0]});
    let freqKV = this.frequencies(vals);
    let freq = freqKV.map(x => { return x[1];}).sort();
    let maxFreq = Math.max.apply(null, freq);

    if(maxFreq == 1){
        return this.ranks.highValue;
    }else if(maxFreq == 2){
      if(freq.length == 3){ // only 3 keys, means 2 pair
          return this.ranks.twoPair;
      } else {
          return this.ranks.pair;
      }
    }else if(maxFreq == 3){
        if(freq.length == 2){
            return this.ranks.fullhouse;
        }else{
            return this.ranks.three;
        }
    }else if(maxFreq == 4){
        return this.ranks.four;
    }
  },

  numToWords: function(num){
    if(num < 0){
      return "right";
    }else if (num == 0){
      return "none";
    }else {
      return "left";
    }
  },

  // main fn
  compareHands: function(arr1, arr2){
    var result = this.getRank(arr1) - this.getRank(arr2);

    if(result == 0){
      result = this.compareHighCard(arr1, arr2);
    }

    var word = this.numToWords(result);
    return word;
  }
}

export default Poker;
