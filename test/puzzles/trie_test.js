import test from 'ava';

class TrieNode {
  constructor(value){
    this.value = value;
    this.children = [];
  }

  append(str){
    this.append_chars(null, [this], str.split(""));
  }

  append_chars(parent, nodes, chars){
    //console.log('append_chars', parent, nodes, chars);
    if(chars.length === 0){ return; }

    let node = this.node_match(nodes, chars[0]);
    if(node){
      this.append_chars(node, node.children, chars.slice(1));
    }else{
      node = new TrieNode(chars[0]);
      parent.children.push(node);
      this.append_chars(node, node.children, chars.slice(1));
    }
  }

  // find node that match the given letter.
  node_match(nodes, char){
    for(let i=0; i< nodes.length; i++){
      if(nodes[i].value === char){
        return nodes[i];
      }
    }

    return null;
  }

  // build initial tree.
  static build_from(str) {
    let head = new TrieNode(str[0]);
    head.append(str);

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
  let node = TrieNode.build_from("mount");
  let values = [ [ 'm' ], [ 'o' ], [ 'u' ], [ 'n' ], [ 't' ] ];
  t.deepEqual(node.print(), values);
});

test("add 'mount', 'mounted' ", t => {
  let node = TrieNode.build_from("mount");
  node.append("mounted");
  let values = [ [ 'm' ], [ 'o' ], [ 'u' ], [ 'n' ], [ 't' ], [ 'e' ], [ 'd' ] ];
  t.deepEqual(node.print(), values);
});


test("add 'mount', 'maven' ", t => {
  let node = TrieNode.build_from("mount");
  node.append("maven");
  let values = [ [ 'm' ],
                 [ 'o', 'a' ],
                 [ 'u', 'v' ],
                 [ 'n', 'e' ],
                 [ 't', 'n' ] ];
  t.deepEqual(node.print(), values);
});

test("add 'deed', 'deer' ", t => {
  let node = TrieNode.build_from("deed");
  node.append("deer");
  let values = [ [ 'd' ],
                 [ 'e' ],
                 [ 'e' ],
                 [ 'd', 'r' ] ]
  t.deepEqual(node.print(), values);
});
