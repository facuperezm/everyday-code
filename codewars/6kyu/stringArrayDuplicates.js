// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {
  return s.map((word) => {
    let charArr = word.split("");

    let prevChar = "";
    let newStr = "";

    charArr.forEach((char) => {
      if (char !== prevChar) {
        newStr += char;
        prevChar = char;
      }
    });

    return newStr;
  });
}
