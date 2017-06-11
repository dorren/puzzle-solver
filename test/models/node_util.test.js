import test from 'ava';
import NodeUtil from '../../app/models/node_util'

test("NodeUtil", t => {
	t.is(NodeUtil.operators.length, 5);
});

test("buildTree(), + - 1 2 * 3 4", t => {
	var node = NodeUtil.buildTree(["+", "-", 1, 2, "*", 3, 4]);
	t.is(node.toPrefixString(), "+ - 1 2 * 3 4");
});

test("buildTree(), + - 1 * 2 3 4", t => {
	var node = NodeUtil.buildTree(["+", "-", 1, "*", 2, 3, 4]);
	t.is(node.toPrefixString(), "+ - 1 * 2 3 4");
});

test("buildTree(), + 1 lg(10)", t => {
	var node = NodeUtil.buildTree(["+", 1,  "lg", 10]);
	t.is(node.toPrefixString(), "+ 1 lg(10)");
});

test("buildTree(), + lg(100) lg(10)", t => {
	var node = NodeUtil.buildTree(["+", "lg", 100, "lg", 10]);
	t.is(node.toPrefixString(), "+ lg(100) lg(10)");
});

test("buildTree(), + 1 lg(10 * 10)", t => {
	var node = NodeUtil.buildTree(["+", 1, "lg", "*", 10, 10]);
	t.is(node.toPrefixString(), "+ 1 lg(* 10 10)");
});

test("buildTree(), lg(* + 1 2 - 3 4)", t => {
	var node = NodeUtil.buildTree(["lg", "*", "+", 1, 2, "-", 3, 4]);
	t.is(node.toPrefixString(), "lg(* + 1 2 - 3 4)");
});
