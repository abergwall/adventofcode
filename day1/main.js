const { readFileSync } = require("fs");

function main(filename) {
  let mostCalories = 0;
  const caloriesPerElf = [];
  let elfValues = [];

  const data = readFileSync(filename, "utf-8");
  const calories = data.split(/\r?\n/);

  calories.forEach((cal) => {
    if (cal.length > 0) {
      elfValues.push(parseInt(cal));
    } else {
      caloriesPerElf.push(elfValues);
      elfValues = [];
    }
  });
  caloriesPerElf.forEach((elf) => {
    const sumCalories = elf.reduce((a, b) => a + b);
    if (mostCalories < sumCalories) {
      mostCalories = sumCalories;
    }
  });
  console.log(mostCalories);
}

main("./calories.txt");
