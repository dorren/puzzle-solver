import Node from './node';

var NodeUtil = {
  operators: ["+", "-", "*", "/", "lg"],

  isOperator: function(value) {
    return (NodeUtil.operators.indexOf(value) >= 0);
  },

  operatorUnary: function(op) {
    return (op == 'lg');
  },
/**
 * build a node tree from given prefix array.
 */
  buildTree: function(array){
    var src = array.slice();
    var operands = [];

    while(array.length > 0){
      var elem = array.pop();
      while(!NodeUtil.isOperator(elem)){
        operands.push(elem);
        elem = array.pop();
      }

      // build nodes
      if(NodeUtil.operatorUnary(elem)){
        var node = new Node(elem, operands.pop());
        operands.push(node);
      }else{
        var node = new Node(elem, operands.pop(), operands.pop());
        operands.push(node);
      }
    }

    var node = operands.pop();
    node.src = src;
    return node;
  }


};

export default NodeUtil;
