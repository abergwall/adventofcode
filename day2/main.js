/* 
Day 2 of adventofcode
https://adventofcode.com/2022/day/2
*/

const { readFileSync } = require("fs");
const FILENAME = "./data.txt";

var ScenariosPartOne = {
  AX: 4,
  AY: 8,
  AZ: 3,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 7,
  CY: 2,
  CZ: 6,
};
var ScenariosPartTwo = {
  AX: 3,
  AY: 4,
  AZ: 8,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 2,
  CY: 6,
  CZ: 7,
};

const readFile = () => {
  const content = readFileSync(FILENAME, "utf-8");
  return content.split(/\r?\n/);
};

const rockPaperScissors = () => {
  const data = readFile();

  let pointsPartOne = 0;
  let pointsPartTwo = 0;

  data.forEach((round) => {
    const result = round.split(" ");
    const res = `${result[0]}${result[1]}`;
    pointsPartOne += ScenariosPartOne[res];
  });
  console.log(pointsPartOne);

  data.forEach((round) => {
    const result = round.split(" ");
    const res = `${result[0]}${result[1]}`;
    pointsPartTwo += ScenariosPartTwo[res];
  });
  console.log(pointsPartTwo);
  return { pointsPartOne, pointsPartTwo };
};

rockPaperScissors();
