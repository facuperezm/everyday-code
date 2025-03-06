// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  str = str.toLowerCase();
  let seen = new Set();

  for (let char of str) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
