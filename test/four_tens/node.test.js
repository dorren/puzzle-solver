import test from 'ava';
import Node from '../../app/four_tens/node'


test("value Node", t => {
  var node = new Node(1);

	t.is(node.value, 1);
  t.is(node.hasChildren(), false);
});

test("operator Node", t => {
  var node  = new Node("+", 1, 2);

	t.is(node.value, "+");

  t.is(node.hasChildren(), true);
  t.is(node.left.value, 1);
  t.is(node.right.value, 2);
});

test("bad parent value", t => {
  var node  = new Node("+", 1);

  const error = t.throws(() => {
    node.setValue("blah");
	}, Error);

  var msg = "blah is not an operator";
  t.is(error.message, msg);
});

test("bad child node", t => {
  var node  = new Node("+");

  const error = t.throws(() => {
    node.setLeft('a');
	}, Error);

  var msg = "a is not a valid child, must be number or Node object only";
  t.is(error.message, msg);
});

test("calc 1+2", t => {
  var node  = new Node("+", 1, 2);

  t.is(node.calc(), 3);
});

/**
 *       +
 *     /  \
 *    1    +
 *        / \
 *       2  3
 */
test("calc 1+2+3", t => {
  var node  = new Node("+", 1);
  var right = new Node("+", 2, 3);
  node.setRight(right);

  t.is(node.calc(), 6);
});


test("calc lg(100)", t => {
  var node  = new Node("lg", 100);

  t.is(node.calc(), 2);
});

test("toString()", t => {
	var node = new Node("+", 1, 2);

	t.is(node.toString(), "1 + 2");
})

test("toString() log(10)", t => {
	var node = new Node("lg", 10);

	t.is(node.toString(), "lg(10)");
})

test("toString() 1*2+3", t => {
  var node  = new Node("*", 1);
  var right = new Node("+", 2, 3);
  node.setRight(right);

  t.is(node.toString(), "1 * (2 + 3)");
});

test("toPrefixString() 1+2+3", t => {
  var node  = new Node("*", 1);
  var right = new Node("+", 2, 3);
  node.setRight(right);
  t.is(node.toPrefixString(), "* 1 + 2 3");
});
