/* 
Day 1 of adventofcode
https://adventofcode.com/2022/day/1
*/

const { readFileSync } = require("fs");
const FILENAME = "./data.txt";

const readFile = () => {
  const content = readFileSync(FILENAME, "utf-8");
  return content.split(/\r?\n/);
};

const sumCaloriesPerElf = (data) => {
  const caloriesPerElf = [];
  let elfValues = [];
  data.forEach((cal) => {
    if (cal.length > 0) {
      elfValues.push(parseInt(cal));
    } else {
      caloriesPerElf.push(elfValues);
      elfValues = [];
    }
  });
  const sumCaloriesPerElf = caloriesPerElf.map((elf) => {
    return elf.reduce((a, b) => a + b);
  });

  return sumCaloriesPerElf.sort().reverse();
};

const partOne = () => {
  const data = readFile();
  const caloriesPerElf = sumCaloriesPerElf(data);
  const mostCalories = caloriesPerElf[0];

  console.log(
    `1. The elf with the most calories is carrying ${mostCalories} cal`
  );
};

const partTwo = () => {
  const data = readFile();
  const caloriesPerElf = sumCaloriesPerElf(data);
  const topThreeSum = caloriesPerElf.splice(0, 3).reduce((a, b) => a + b);

  console.log(`2. The total sum of the top three elfs is ${topThreeSum} cal`);
};

partOne();
partTwo();
