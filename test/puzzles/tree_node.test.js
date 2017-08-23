import test from 'ava';
import Node from '../../app/puzzles/node';

var node;

//      1
//    /  \
//   2    3
//  / \
// 4  5
test.before(t => {
  node = new Node(1);
  node.left = new Node(2);
  node.right = new Node(3);
  node.left.left  = new Node(4);
  node.left.right = new Node(5);
});

test("height()", t => {
  t.is(node.height(), 3);
});

test("dfs()", t => {
  var values = [];
  node.dfs((x) => {
    values.push(x.value);
  });

  t.deepEqual(values, [1,2,4,5,3]);
});

test("bfs()", t => {
  var values = [];
  node.bfs((x) => {
    values.push(x.value);
  });

  t.deepEqual(values, [1,2,3,4,5]);
});

test("count_by_level()", t => {
  t.deepEqual(node.count_by_level(1), 1);
  t.deepEqual(node.count_by_level(2), 3);
  t.deepEqual(node.count_by_level(3), 5);
});
