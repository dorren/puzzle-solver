import test from 'ava';
import LinkedList from '../../app/puzzles/linked_list';

test("removeDup()", t => {
  let list = LinkedList.build([1,2,3]);
  list.removeDup();
  t.deepEqual(list.toArray(), [1,2,3]);
});

test("removeDup()", t => {
  let list = LinkedList.build([1,1,2,2,3]);
  list.removeDup();
  t.deepEqual(list.toArray(), [1,2,3]);
});

test("reverse()", t => {
  let list = LinkedList.build([1,2,3]);
  list = list.reverse();
  t.deepEqual(list.toArray(), [3,2,1]);
});
