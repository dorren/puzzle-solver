import NodeUtil from './node_util'
/**
 * used to do puzzle calculation. Using prefix, parent is operator, children
 * are operands.
 */
class Node {
  constructor(value, ...children) {
    this.setValue(value);

    if(children.length > 0){
      this.setLeft(children[0]);
      this.setRight(children[1]);
    }
  }

  hasChildren() {
    return (this.left != undefined ||
            this.right != undefined);
  }

  /**
   * set node value, if node has children, parent value must be an operator
   */
  setValue(value) {
    if(this.hasChildren()){
      if(this.isOperator(value)){
        this.value = value;
      } else {
        var msg = value + " is not an operator";
        throw new Error(msg);
      }
    }else{
      this.value = value;
    }
  }

  setLeft(node) {
    this.setChild(node, 0);
  }

  setRight(node) {
    this.setChild(node, 1);
  }

  /**
   * set child node, side 0 is left, side 1 is right.
   */
  setChild(node, side) {
    if (node == undefined) return;

    if(typeof(node) == 'number'){
      node = new Node(node);
    };

    if(node.constructor.name == "Node"){
      if(side == 0){
        this.left = node;
        node.parent = this;
      }else {
        this.right = node;
        node.parent = this;
      }
    }  else {
      var msg = node + " is not a valid child, must be number or Node object only";
      throw new Error(msg);
    }
  }

  isOperator(value) {
    return NodeUtil.isOperator(value);
  }

  dfs() {
    return;
  }

  /**
   * do calculation.
   */
  calc() {
    if(this.hasChildren()){
      var left = this.left;
      var right = this.right;

      if(this.value == "+") {
        return left.calc() + right.calc();
      } else if(this.value == "-") {
        return left.calc() - right.calc();
      } else if(this.value == "*") {
        return left.calc() * right.calc();
      } else if(this.value == "/") {
        return left.calc() / right.calc();
      } else if(this.value == "lg") { // lg node only use left node.
        return Math.log(left.calc()) / Math.log(10);
      }
    }else{
      return this.value;
    }
  }

  /** print out tree in infix order */
  toString() {
    if(!this.hasChildren()){
      return "" + this.value;
    } else if(this.right == undefined){
      return this.value + "(" + this.left.toString() + ")";
    }else {
      var str = this.left.toString()   +
                 " " + this.value + " " +
                 this.right.toString();

      // add precedence parenthesis
      if(this.parent){
        var parentOp = this.parent.value;
        if((parentOp != "+" && parentOp != "-") &&
           (this.value == "+" || this.value == "-")){
             str = "(" + str + ")";
        }
      };

      return str;
    }
  }

  /** print out tree in prefix order */
  toPrefixString() {
    if(!this.hasChildren()){
      return "" + this.value;
    } else if(this.right == undefined){
      return this.value + "(" + this.left.toPrefixString() + ")";
    }else {
      return this.value + " " +
             this.left.toPrefixString() + " " +
             this.right.toPrefixString();
    }
  }
};



export default Node;
