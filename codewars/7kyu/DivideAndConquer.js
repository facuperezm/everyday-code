// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      sum += x[i];
    } else {
      sum -= parseInt(x[i]);
    }
  }
  return sum;
}
