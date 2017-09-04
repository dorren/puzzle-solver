// http://practice.geeksforgeeks.org/problems/word-break-part-2/0
//
// Given a string s and a dictionary of words dict, add spaces in s to construct
// a sentence where each word is a valid dictionary word.
//
// Return all such possible sentences.
//
// For example, given
// s = "snakesandladder",
// dict = ["snake", "snakes", "and", "sand", "ladder"].
//
// A solution is ["snakes and ladder",
//            "snake sand ladder"].

var WordBreak = {
  logging: true,

  log: function(...items){
    if(this.logging)
      console.log(...items);
  },

  reduce: function(dict, str){
    this.log("A ", dict, str);
    if(dict.length == 0 && str.length > 0){
      return [];
    }
    if(str.length == 0){
      return [[]];
    }

    let dict2 = dict.slice(1);

    // exclude dict head, whole string
    let sln = this.reduce(dict2, str);

    // include head, substring
    let word = dict[0];
    let i = str.indexOf(word);
    if(i != -1){
        let str2 = str.replace(word, "");
        let sln2 = this.reduce(dict2, str2);
        sln2.map(sln => sln.unshift(word));
        sln = sln.concat(sln2);
    }

    this.log("C ", dict, str, sln);
    return sln;
  },

  run: function(dict, str){
    this.log("-".repeat(30));
    let output = this.reduce(dict, str);
    output = output.map(words => {
      // words may be out of order, sort by src string
      words.sort((a,b) => str.indexOf(a) - str.indexOf(b));
      return words.join(" ");
    });
    return output;
  }
}

export default WordBreak;
