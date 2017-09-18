import test from 'ava';
import TicTacToe from '../../app/puzzles/tic_tac_toe';

test("hasWinner()", t => {
  let board = [null, null, null,
               null, null, null,
               null, null, null];
  t.is(TicTacToe.hasWinner(board, 'x'), false);
});

test("hasWinner()", t => {
  let board = [null, null, null,
               'x', 'x', 'x',
               null, null, null];
  t.is(TicTacToe.hasWinner(board, 'x'), true);
});

test("hasWinner()", t => {
  let board = [null, 'x', null,
               null, 'x', null,
               null, 'x', null];
  t.is(TicTacToe.hasWinner(board, 'x'), true);
});

test("hasWinner()", t => {
  let board = ['x',  null, null,
               null, 'x',  null,
               null, null, 'x'];
  t.is(TicTacToe.hasWinner(board, 'x'), true);
});

test("hasWinner()", t => {
  let board = [null, null, 'x',
               null, 'x',  null,
               'x',  null, null];
  t.is(TicTacToe.hasWinner(board, 'x'), true);
});

test("hasWinner()", t => {
  let board = [null, null, null, 'x',
               null, null, 'x',  null,
               null, 'x',  null, null,
               'x',  null, null, null];
  t.is(TicTacToe.hasWinner(board, 'x'), true);
});
