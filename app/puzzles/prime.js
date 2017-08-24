var Prime = {
  isPrime: function(x){
    if(x <= 1){
      return false;
    }else if (x <= 3) {
      return true;
    }else if (x % 2==0 || x % 3 == 0){
      return false;
    }else {
      var result = true;
      var max_divisor = Math.floor(Math.sqrt(x));

      for(let i = 5; i <= max_divisor; i+=2){
        if(i%3 != 0){
          console.log("check " + x + ", divisor " + i);
          if(this.isPrime(i) && x % i == 0){
            result = false;
            break;
          }
        }
      };

      return result;
    }
  }
}


export default Prime;
