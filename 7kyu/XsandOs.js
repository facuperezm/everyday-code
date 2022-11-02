// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  if (str.includes("x") || str.includes("o")) {
    const xAmount = str.toLowerCase().split("x").length;
    const oAmount = str.toLowerCase().split("o").length;
    return xAmount === oAmount ? true : false;
  }
  return true;
}
