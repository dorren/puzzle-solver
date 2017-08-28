/**
 * binary search tree (BST)
 */
class Bst {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isLeaf() {
    return this.left == null && this.right == null;
  }

  // add new element to the bst tree.
  add(val) {
    if(val < this.value){
      if(this.left == null){
        this.left = new this.constructor(val);
      }else{
        this.left.add(val);
      }
    }else{
      if(this.right == null){
        this.right = new this.constructor(val);
      }else{
        this.right.add(val);
      }
    }

    return this;
  }

  // build a bst tree with given array of elements.
  static build(arr) {
    let root = new this(arr.shift());
    arr.map( x => { root.add(x); });

    return root;
  }

  max() {
    if(this.isLeaf()){
      return this.value;
    }else {
      return this.right.max();
    }
  }

  min() {
    if(this.isLeaf()){
      return this.value;
    }else {
      return this.left.min();
    }
  }

  // https://www.hackerrank.com/challenges/ctci-is-binary-search-tree/problem
  //
  // a tree is binary search tree if
  //   * every node in a node's left subtree is less than the data value of that node.
  //   * every node in a node's right subtree is greater than the data value of that node.
  isBst() {
    const _isBst = function(node){
      if(node.isLeaf()){
        return true;
      }

      var result = node.left.isBst()  && node.left.max() < node.value &&
                   node.right.isBst() && node.right.min() > node.value;
      return result;
    }

    return _isBst(this);
  }

  // find distance from this node to target value
  // @param val, target value
  distance(val) {
    if(val == this.value){
      return 0;
    }else if(val < this.value) {
      return 1 + this.left.distance(val);
    }else {
      return 1 + this.right.distance(val);
    }
  }

  /** find distance between 2 node values.
   *
   * @param a, node value a
   * @param b, node value b
   */
  distanceBetween(a, b){
    if(this.value == a){
      return this.distance(b);
    }else if(this.value == b){
      return this.distance(a);
    }

    if(a > b){
      let t = a; a = b; b = t;
    }

    if(a < this.value && b < this.value){
      return this.left.distanceBetween(a, b);
    }else if (a < this.value && b > this.value){
      return this.distance(a) + this.distance(b);
    }else if (a > this.value && b > this.value){
      return this.right.distanceBetween(a, b);
    }else {
      let msg = "should not be here. node=" + this.value + ",a=" + a + ",b=" + b;
      throw msg;
    }
  }
}

export default Bst;
