import test from 'ava';

// http://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1
class LinkedList{
  constructor(val){
    this.value = val;
    this.bottom = null;
    this.next = null;
  }

  combine(){
    let parent = this;
    let stack = [parent.bottom, parent.next];

    while(stack.length > 0){
      let vals = stack.map(x => x.value);
      let min = Math.min.apply(null, vals);
      let index = vals.indexOf(min);
      let node = stack.splice(index, 1)[0];   // remove node with min value.

      if(node.bottom !== null) { stack.push(node.bottom);}
      if(node.next !== null)   { stack.push(node.next);}

      parent.next = node;
      parent.bottom = null;
      parent = node;
    }
  }

  // build vertical list
  static buildBottom(arr){
    let root = new this(arr.shift());

    let current = root;
    while(arr.length > 0){
      current.bottom = new this(arr.shift());
      current = current.bottom;
    }

    return root;
  }

  /**
   * build bottom and horizontal list
   * @param arrOfLists, [[5,7,8,30],[10,20],[19,22,50],[28,35,40,45]]
   * @return root node
   */
  static build(arrOfLists){
    let lists = arrOfLists.map(x => LinkedList.buildBottom(x));
    let root = lists.shift();
    let list = lists.reduce((acc, x) => {
      acc.next = x;
      return x;
    }, root);
    return root;
  }
}


test("build()", t => {
  let arrOfArr = [[5,7,8,30],[10,20],[19,22,50],[28,35,40,45]];
  let root = LinkedList.build(arrOfArr);

  t.is(root.value, 5);
});

test("combine()", t => {
  let arrOfArr = [[5,7,8,30],[10,20],[19,22,50],[28,35,40,45]];
  let node = LinkedList.build(arrOfArr);

  let arr = [];
  node.combine();
  while(node !== null){
    arr.push(node.value);
    node = node.next;
  }

  t.deepEqual(arr, [ 5, 7, 8, 10, 19, 20, 22, 28, 30, 35, 40, 45, 50 ]);
});
