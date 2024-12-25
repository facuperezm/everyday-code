// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  const numStr = num.toString();
  let modifiedNum = "";

  for (let i = 0; i < numStr.length - 1; i++) {
    const currentDigit = parseInt(numStr[i]);
    const nextDigit = parseInt(numStr[i + 1]);

    modifiedNum += currentDigit;

    if (currentDigit % 2 !== 0 && nextDigit % 2 !== 0) {
      modifiedNum += "-";
    }
  }

  modifiedNum += numStr[numStr.length - 1];
  return modifiedNum;
}
