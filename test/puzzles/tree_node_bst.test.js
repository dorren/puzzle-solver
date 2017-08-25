import test from 'ava';
import Node from '../../app/puzzles/node';

var node;

test.beforeEach(t => {
  // https://www.hackerrank.com/challenges/ctci-is-binary-search-tree/problem
  //
  //      4
  //    /  \
  //   2    6
  //  / \  / \
  // 1  3 5   7
  node = new Node(4);
  node.left = new Node(2);
  node.left.left  = new Node(1);
  node.left.right  = new Node(3);
  node.right = new Node(6);
  node.right.left  = new Node(5);
  node.right.right  = new Node(7);
});

test("min max()", t=>{
  t.is(node.max(), 7);
  t.is(node.min(), 1);
});

test("isBst() true", t => {
  t.is(node.isBst(), true);
});

test("isBst() false", t => {
  //      4
  //    /  \
  //   2    6
  //  / \  / \
  // 1  3 50   7
  node.right.left  = new Node(50);
  t.is(node.isBst(), false);
});
