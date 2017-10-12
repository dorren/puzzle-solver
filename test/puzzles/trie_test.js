import test from 'ava';

class TrieNode {
  constructor(value){
    this.value = value;
    this.children = [];
  }

  append_chars(chars){
    if(chars.length === 0){ return; }

    let head = chars[0];
    let tail = chars.slice(1);
    let child = null;

    if(this.value === head){
      this.append_chars(tail);
    }else if(child = this.child_match(head)){
      child.append_chars(tail);
    }else{
      child = new TrieNode(head);
      this.children.push(child);
      child.append_chars(tail);
    }
  }

  // find children that match the letter.
  child_match(char){
    for(let i=0; i< this.children.length; i++){
      if(this.children[i].value === char){
        return this.children[i];
      }
    }

    return null;
  }

  // build initial tree.
  static build_from_chars(chars) {
    let c = chars[0];
    let head = new TrieNode(c);
    head.append_chars(chars.slice(1));

    return head;
  }

  // return node values in 2d array.
  print(){
    let result = [];
    this.constructor.bfs([this], arr => result.push(arr));

    return result;
  }

  // breath first search
  static bfs(stack, callback){
    while(stack.length > 0){
      callback(stack.map(x => x.value)); // return each level as array

      // put next level onto stack
      let children = stack.reduce((acc, x) => acc.concat(x.children), []);
      stack = children;
    }
  }
}



test("add 'mount' ", t => {
  let node = TrieNode.build_from_chars("mount".split(''));
  let values = [ [ 'm' ], [ 'o' ], [ 'u' ], [ 'n' ], [ 't' ] ];
  t.deepEqual(node.print(), values);
});

test("add 'mount', 'mounted' ", t => {
  let node = TrieNode.build_from_chars("mount".split(""));
  node.append_chars("mounted".split(""));
  let values = [ [ 'm' ], [ 'o' ], [ 'u' ], [ 'n' ], [ 't' ], [ 'e' ], [ 'd' ] ];
  t.deepEqual(node.print(), values);
});


test("add 'mount', 'maven' ", t => {
  let node = TrieNode.build_from_chars("mount".split(""));
  node.append_chars("maven".split(""));
  let values = [ [ 'm' ],
                 [ 'o', 'a' ],
                 [ 'u', 'v' ],
                 [ 'n', 'e' ],
                 [ 't', 'n' ] ];
  t.deepEqual(node.print(), values);
});

test.skip("add 'deed', 'deer' ", t => {
  let node = TrieNode.build_from_chars("deed".split(""));
  node.append_chars("deer".split(""));
  console.log(node.print());
});
