class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  hasLeft()  { return this.left  != null; }
  hasRight() { return this.right != null; }

  static _height(node) {
    if(node == null) { return 0; }

    var left_h  = this._height(node.left);
    var right_h = this._height(node.right);

    return 1 + Math.max(left_h, right_h);
  }

  height() {
    return this.constructor._height(this);
  }

  // depth first search
  static _dfs(node, callback){
    if(node == null){ return; }

    callback(node);

    this._dfs(node.left, callback);
    this._dfs(node.right, callback);
  }

  dfs(callback){
    this.constructor._dfs(this, callback);
  }

  // breath first search
  static _bfs(stack, callback){
    if(stack.length == 0){ return; }

    while(stack.length > 0){
      var node = stack.shift();
      callback(node);

      if(node.hasLeft())  { stack.push(node.left);  }
      if(node.hasRight()) { stack.push(node.right); }
    }
  }


  bfs(callback){
    this.constructor._bfs([this], callback);
  }
}

export default Node;
