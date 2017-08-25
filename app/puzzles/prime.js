var Prime = {
  cache: {2:2, 3:3},

  savetoCache: function(x){
    this.cache[x] = x;
  },

  inCache: function(x){
    return this.cache[x] != undefined;
  },

  isPrime: function(x){
    if(this.inCache(x)){
      return true;
    }
    //console.log(x);

    if(x <= 1){
      return false;
    }else if (x <= 3) {
      this.savetoCache(x);
      return true;
    }else if (x % 2==0 || x % 3 == 0){
      return false;
    }else {
      var result = true;
      var max_divisor = Math.floor(Math.sqrt(x));

      for(let i = 5; i <= max_divisor; i+=2){
        if(i%3 != 0){
          if(this.isPrime(i) && x % i == 0){
            //console.log(x + " % " + i + " = 0");
            result = false;
            break;
          }else{
            //console.log(x + " % " + i + " != 0");
          }
        }
      };

      if(result) {
        this.savetoCache(x);
      }

      return result;
    }
  }
}


export default Prime;
