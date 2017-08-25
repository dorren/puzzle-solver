import MathUtil from './math_util';
import NodeUtil from './node_util';
import Node from './node';

/**
 * given 4 10s, use + - * / and lg() to solve.
 *
 * 10   10   10   10 =  1
 * 10   10   10   10 =  2
 * 10   10   10   10 =  3
 *        ...
 * 10   10   10   10 = 10
 */
class FourTens {
  constructor(){
  }

  /**
   * return 5 possible prefix tree structures.
   */
  trees(operators){
    var op = operators; // make it short
    var trees = [[op[0], op[1],    10,    10, op[2], 10, 10],
                 [op[0],    10, op[1],    10, op[2], 10, 10],
                 [op[0], op[1], op[2],    10,    10, 10, 10],
                 [op[0], op[1],    10, op[2],    10, 10, 10],
                 [op[0],    10, op[1], op[2],    10, 10, 10]];

    return trees;
  }

  bruteForce(){
    var allOperators = NodeUtil.operators.slice();
    allOperators.pop(); // remove lg

    var permutations = MathUtil.permutationsWithRepeat(allOperators, 3);
    var targets = [...Array(11).keys()];  // [1,2,3 ... 10]
    targets.shift();

    for(let target of targets){
      let found = false;

      for(let operators of permutations){    // operator permutations
        if(found) break;

        var trees = this.trees(operators);
        for(let arr of trees){              // tree permutations
          if(found) break;

          var node = NodeUtil.buildTree(arr);
          found = this.check(node, target);
        };
      }

      if(!found){ // start using lg()
        for(let operators of permutations){    // operator permutations
          if(found) break;

          var trees = this.trees(operators);
          for(let arr of trees){              // tree permutations
            if(found) break;

            // now insert lg() into existing trees.
            var nodeIndex = [...Array(7).keys()]; // [0,1,2,3,4,5,6]
            var combinations = MathUtil.combinations(nodeIndex);
            for(let c of combinations){
              if(found) break;

              var lgArr = arr.slice(); // use a copy
              // if c = [1,3], means insert lg() at index 1 and 3 of the tree
              while(c.length > 0){
                lgArr.splice(c.pop(), 0, "lg");  // insert each lg()
              }

              var node = NodeUtil.buildTree(lgArr);
              found = this.check(node, target);
            }

          };
        }
      }

      if(!found){
        console.log("Solution for " + target + " not found.");
      }
    }

    return;
  }

  check(node, target)  {
    var value = node.calc();
    var found = (value == target);

    if(found){
      console.log(node.toString() + " = " + value + ",     " + node.toPrefixString());
    }

    return found;
  }
};

export default FourTens;
