// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let charCode = a[i];
    let char = String.fromCharCode(charCode);
    if (vowels.includes(char)) {
      result.push(char);
    } else {
      result.push(charCode);
    }
  }
  return result;
}
