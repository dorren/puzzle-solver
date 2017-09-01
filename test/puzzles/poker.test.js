import test from 'ava';
import Poker from '../../app/puzzles/poker';

test("high card", t => {
  var hand1 = ['2H', '3D', '8S', '4C', '9D'];
  var hand2 = ['2H', '3D', '8S', '4C', '9D'];
  t.is(Poker.compareHands(hand1, hand2), "none");
});

test("high card right", t => {
  var hand1 = ['2H', '3D', '8S', '4C', '9D'];
  var hand2 = ['2H', '3D', '8S', '4C', 'KD'];
  t.is(Poker.compareHands(hand1, hand2), "right");
});

test("pair right", t => {
  var hand1 = ['2H', '3D', '8S', '4C', '9D'];
  var hand2 = ['2H', '3D', '8S', '4C', '8D'];
  t.is(Poker.compareHands(hand1, hand2), "right");
});

test("high pair right", t => {
  var hand1 = ['2H', '3D', '8S', '9C', '9D'];
  var hand2 = ['2H', '3D', '8S', '4C', '8D'];
  t.is(Poker.compareHands(hand1, hand2), "left");
});


test("2 pair right", t => {
  var hand1 = ['2H', '3D', '8S', '3C', '8D'];
  var hand2 = ['2H', '3D', '9S', '2C', '9D'];
  t.is(Poker.compareHands(hand1, hand2), "right");
});

test("2 pair right", t => {
  var hand1 = ['2H', '3D', '9S', '2C', '9D'];
  var hand2 = ['2H', '4D', '9S', '2C', '9D'];
  t.is(Poker.compareHands(hand1, hand2), "right");
});


test("3 of kind right", t => {
  var hand1 = ['2H', '3D', '8S', '3C', '8D'];
  var hand2 = ['2H', '2D', '9S', '2C', '9D'];
  t.is(Poker.compareHands(hand1, hand2), "right");
});

test("full house right", t => {
  var hand1 = ['8H', '3D', '3S', '3C', '8D'];
  var hand2 = ['2H', '2D', '9S', '2C', '9D'];
  t.is(Poker.compareHands(hand1, hand2), "left");
});

test("four right", t => {
  var hand1 = ['2H', '3D', '4S', '5C', '6D'];
  var hand2 = ['2H', '2D', '2S', '2C', '9D'];
  t.is(Poker.compareHands(hand1, hand2), "right");
});

test("straight right", t => {
  var hand1 = ['2H', '3D', '4S', '5C', '6D'];
  var hand2 = ['3H', '4D', '5S', '6C', '7D'];
  t.is(Poker.compareHands(hand1, hand2), "right");
});

test("straight flush right", t => {
  var hand1 = ['2H', '3D', '4S', '5C', '6D'];
  var hand2 = ['3H', '4H', '5H', '6H', '9H'];
  t.is(Poker.compareHands(hand1, hand2), "right");
});

test("straight flush right", t => {
  var hand1 = ['2H', '3D', '4S', '5C', '6D'];
  var hand2 = ['3H', '4H', '5H', '6H', '7H'];
  t.is(Poker.compareHands(hand1, hand2), "right");
});

test("royal flush right", t => {
  var hand1 = ['2D', '3D', '4D', '5D', '6D'];
  var hand2 = ['TH', 'JH', 'QH', 'KH', 'AH'];
  t.is(Poker.compareHands(hand1, hand2), "right");
});

test("both fullhouse, left", t => {
  var hand1 = ['2D', '2C', 'JD', 'JH', 'JS'];
  var hand2 = ['QD', 'QC', 'TD', 'TH', 'TS'];
  t.is(Poker.compareHands(hand1, hand2), "left");
});
