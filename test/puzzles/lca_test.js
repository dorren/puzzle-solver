import test from 'ava';

// find lowest common ancestor
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  addLeft(node){
    this.left = node;
    node.parent = this;
    return this;
  }

  addRight(node){
    this.right = node;
    node.parent = this;
    return this;
  }

  parents() {
    let arr = [];
    let x = this;
    while(x){
      arr.push(x);
      x = x.parent;
    }
    return arr;
  }

  static lca(x, y){
    let arr1 = x.parents();
    let arr2 = y.parents();

    let p1 = arr1.pop();
    let p2 = arr2.pop();
    let common = null;
    while(p1 && p2 && p1.value === p2.value){
      common = p1;
      p1 = arr1.pop();
      p2 = arr2.pop();
    }
    return common;
  }
}

test("lca()", t=>{
  //           a
  //        /     \
  //      b        c
  //    /  \     /   \
  //   d   e    f    g
  //  / \ / \
  // h  ij  k
  //
  let a = new Node('a');
  let b = new Node('b');
  let c = new Node('c');
  let d = new Node('d');
  let e = new Node('e');
  let f = new Node('f');
  let g = new Node('g');
  let h = new Node('h');
  let i = new Node('i');
  let j = new Node('j');
  let k = new Node('k');

  a.addLeft(b).addRight(c);
  b.addLeft(d).addRight(e);
  d.addLeft(h).addRight(i);
  e.addLeft(j).addRight(k);
  c.addLeft(f).addRight(g);

  t.is(Node.lca(i, k).value, b.value)  // i, k => b
  t.is(Node.lca(i, e).value, b.value)  // i, e => b
  t.is(Node.lca(i, c).value, a.value)  // i, c => b
  t.is(Node.lca(i, b).value, b.value)  // i, b => b
});
