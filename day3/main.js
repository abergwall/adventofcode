/* 
Day 3 of adventofcode
https://adventofcode.com/2022/day/3
*/

const { readFileSync } = require("fs");
const FILENAME = "./data.txt";

var LetterValues = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};


const readFile = () => {
  const content = readFileSync(FILENAME, "utf-8");
  return content.split(/\r?\n/);
};

const groupElfs = (data) => {
  const groupedElfs = [];
  let group = [];
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    count++
    group.push([...new Set(data[i].split(""))].join(""));
    if (count === 3) {
      groupedElfs.push(group.sort((a, b) => b.length - a.length));
      group = [];
      count= 0;
    }
  }
  return groupedElfs;
};

const partOne = () => {
  const data = readFile();
  let sum = 0;

  data.forEach((ruckSack) => {
    const compartmentOne = ruckSack.slice(0, ruckSack.length / 2);
    const compartmentTwo = ruckSack.slice(ruckSack.length / 2);

    const commonItem = compartmentOne
      .split("")
      .filter((e) => compartmentTwo.includes(e));

    sum += LetterValues[commonItem[0]];
  });
  console.log(sum);
  return sum;
};

const partTwo = () => {
  const data = readFile();
  let sum = 0;
  const groupedElfs = groupElfs(data);
  groupedElfs.forEach((group) => {
    const firstBag = group[0].split("");
    for (let i = 0; i < firstBag.length; i++) {
      if (group[1].includes(firstBag[i]) && group[2].includes(firstBag[i])) {
        sum += LetterValues[firstBag[i]];
      }
    }
  });
  console.log(sum)
  return sum;
};

partOne()
partTwo();

