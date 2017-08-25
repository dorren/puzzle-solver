class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  hasLeft()  { return this.left  != null; }
  hasRight() { return this.right != null; }

  isLeaf() {
    return !this.hasLeft() && !this.hasRight();
  }

 // return the max height of the tree
  height() {
    const _height = (node) => {
      if(node == null) { return 0; }

      var left_h  = _height(node.left);
      var right_h = _height(node.right);

      return 1 + Math.max(left_h, right_h);
    }
    return _height(this);
  }

  dfs(callback){
    const _dfs = (node, callback) => {
      if(node == null){ return; }

      callback(node);

      _dfs(node.left, callback);
      _dfs(node.right, callback);
    }

    _dfs(this, callback);
  }

  // breath first search
  bfs(callback){
    const _bfs = (stack, callback) => {
      if(stack.length == 0){ return; }

      while(stack.length > 0){
        var node = stack.shift();
        callback(node);

        if(node.hasLeft())  { stack.push(node.left);  }
        if(node.hasRight()) { stack.push(node.right); }
      }
    }

    _bfs([this], callback);
  }

  // https://modernpathshala.com/Article/4141/amazon-interview-question-sde-2
  // Write a program to find max number of nodes in a binary tree on any level.
  count_by_level(max_level){
    var count = 0;
    var level = 1;
    var stack = [this];

    while(stack.length > 0 && level <= max_level ){
      var stack2 = [];
      while(stack.length > 0){
        var node = stack.shift();
        count += 1;

        if(node.hasLeft())  { stack2.push(node.left);  }
        if(node.hasRight()) { stack2.push(node.right); }
      }
      stack = stack2;
      level++;
    }

    return count;
  }

  // walk through the tree and return the node value of this subtree
  // based on passed in function. Eg,
  //   node.dfsValue(Math.max) returns the max node value of this subtree
  dfsValue(compareFn) {
    var result = this.value;
    this.dfs(node => {
      result = compareFn(result, node.value);
    });

    return result;
  }

  // return max node value of this subtree.
  max() { return this.dfsValue(Math.max); }

  // return min node value of this subtree.
  min() { return this.dfsValue(Math.min); }

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
}

export default Node;
