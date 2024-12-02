const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "file.txt");
const data = fs.readFileSync(file, "utf8");

function calculateTotalDistance(leftList, rightList) {
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  let totalDistance = 0;
  for (let i = 0; i < leftList.length; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i]);
  }

  return totalDistance;
}

const numbers = data
  .split(/\s+/)
  .map((num) => parseFloat(num.trim()))
  .filter((num) => !isNaN(num));

const leftArray = [];
const rightArray = [];

for (let i = 0; i < numbers.length; i += 2) {
  leftArray.push(numbers[i]);
  rightArray.push(numbers[i + 1]);
}

const result = calculateTotalDistance(leftArray, rightArray);
console.log("Total Distance:", result);
