import test from 'ava';
import Bst from '../../app/puzzles/bst';

var bst;

test.beforeEach(t => {
  // https://www.hackerrank.com/challenges/ctci-is-binary-search-tree/problem
  //
  //      4
  //    /  \
  //   2    6
  //  / \  / \
  // 1  3 5   7
  bst = Bst.build([4,2,6,1,3,5,7]);
  console.log(bst);
});

test("isBst()", t=>{
  t.is(bst.isBst(), true);
});

test("distance()", t=>{
  t.is(bst.distance(4), 0);
  t.is(bst.distance(3), 2);   // From 4 to 2 takes 2 steps
});

test("distanceBetween()", t=>{
  t.is(bst.distanceBetween(4, 2), 1);
  t.is(bst.distanceBetween(1, 3), 2);
  t.is(bst.distanceBetween(6, 3), 3);
});
