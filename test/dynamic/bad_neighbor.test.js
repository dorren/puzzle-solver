import test from 'ava';
import BadNeighbor from '../../app/dynamic/bad_neighbor';

test("BadNeighbor()", t => {
  let arr = [10, 3, 2, 5, 7, 8];
  t.deepEqual(BadNeighbor.run(arr), 19);
});

test("BadNeighbor()", t => {
  let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  t.deepEqual(BadNeighbor.run(arr), 16);
});

test("BadNeighbor()", t => {
  let arr = [35, 991, 80, 273, 637, 811, 974, 845, 725];
  t.deepEqual(BadNeighbor.run(arr), 3327);
});

test("BadNeighbor()", t => {
  let arr = [445, 298, 806, 321, 703, 71, 514, 289, 881, 992, 675, 644, 470,
             469, 430, 353, 461, 907, 392, 394, 244, 544, 185, 350, 958, 192,
             930, 453, 726, 844, 819, 197, 797, 323, 889, 835, 142, 650, 538, 87];
  t.deepEqual(BadNeighbor.run(arr), 12570);
});
