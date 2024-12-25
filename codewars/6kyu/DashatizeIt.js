// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  // Check if the input is an integer
  if (!Number.isInteger(num)) {
    return "NaN";
  }

  // Convert the number to a string and remove the negative sign (if any)
  let numStr = Math.abs(num).toString();
  let result = "";

  // Loop through each character in the string
  for (let i = 0; i < numStr.length; i++) {
    // If the current character is odd, add a dash before and after it
    if (parseInt(numStr[i]) % 2 === 1) {
      // If this is not the first character, and the previous character is not already a dash
      if (i !== 0 && result[result.length - 1] !== "-") {
        result += "-";
      }
      // Add the current character and a dash after it
      result += numStr[i] + "-";
      // If this is the last character and it's odd, remove the trailing dash
      if (i === numStr.length - 1) {
        result = result.slice(0, result.length - 1);
      }
    } else {
      // If the current character is even, just add it to the result string
      result += numStr[i];
    }
  }

  // Return the result string
  return result;
}
