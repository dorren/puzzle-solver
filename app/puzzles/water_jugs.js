/**
 * http://practice.geeksforgeeks.org/problems/two-water-jug-problem/0
 *
 * You are at the side of a river. You are given a m litre jug and a n litre jug
 * where 0 < m < n. Both the jugs are initially empty. The jugs don’t have
 * markings to allow measuring smaller quantities. You have to use the jugs to
 * measure d litres of water where d < n. Determine the minimum no of operations
 * to be performed to obtain d litres of water in one of jug. The operations you
 * can perform are:
 *
 * Empty a Jug
 * Fill a Jug
 * Pour water from one jug to the other until one of the jugs is either empty or full.
 *
 * eg,
 * 8 56 46 => -1
 * 3 5 4   => 6
 */

class WaterJugs {
  static gcd(a, b){
    if(a > b){
      a += b;
      b = a - b;
      a -= b;
    }
    if(a == 0) { return b; }
    return this.gcd(a, b % a);
  };

  static trace(mq, nq, msg=''){
    //console.log(`${mq} ${nq} ${msg}`);
  }

  /**
   * @param m small jug size.
   * @param n big jug size.
   * @param d quantity desired.
   * @return minimum number of operations.
   */
  static solve(m, n, d){
    // if d is not multiple of gcd(m, n), then no solution.
    if(d % this.gcd(m, n) !== 0){
      return -1;
    }

    let mq = 0, nq = 0; // m and n's quantity.
    let steps = 0;

    while(mq != d && nq != d){  // keep pouring from m to n.
      if(nq === n){
        nq = 0;           // empty n
      }else if(mq === 0){
        mq += m;          // fill m
      }else {             // transfer from m to n
        let nq0 = nq;
        nq = Math.min((nq + mq), n);
        mq -= nq - nq0;
      }
      steps += 1;
      this.trace(mq, nq);
    }

    let steps2 = 0;
    mq =0, nq=0;
    this.trace(mq, nq, "--- method 2 ---");
    while(mq != d && nq != d){  // keep pouring from n to m.
      if(mq === m){
        mq = 0;           // empty m
      }else if(nq === 0){
        nq += n;          // fill n
      }else {             // transfer from n to m
        let mq0 = mq;
        mq = Math.min((mq + nq), m);
        nq -= mq - mq0;
      }
      steps2 += 1;
      this.trace(mq, nq);
    }

    return Math.min(steps, steps2);
  }
}

export default WaterJugs;
