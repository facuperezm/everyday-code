// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let newString = "";
  string.split("").map((item) => {
    if (item === item.toUpperCase()) {
      return (newString += " " + item);
    } else {
      return (newString += item);
    }
  });
  return newString;
}
