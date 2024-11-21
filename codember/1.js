function simulateCombination(initialCombination, operations) {
  let digits = initialCombination.split("").map(Number);
  let pointer = 0;

  for (let op of operations) {
    if (op === "R") {
      pointer = (pointer + 1) % digits.length;
    } else if (op === "L") {
      pointer = (pointer - 1 + digits.length) % digits.length;
    } else if (op === "U") {
      digits[pointer] = (digits[pointer] + 1) % 10;
    } else if (op === "D") {
      digits[pointer] = (digits[pointer] - 1 + 10) % 10;
    }
  }

  return digits.join("");
}

const initialCombination = "528934712834";
const operations = "URDURUDRUDLLLLUUDDUDUDUDLLRRRR";

const finalCombination = simulateCombination(initialCombination, operations);
console.log(finalCombination);
