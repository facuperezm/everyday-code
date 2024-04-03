// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

function evenChars(string) {
  const array = string.split("");

  if (array.length > 100 || string.length < 2) return "invalid string";

  return array.filter((item, index) => index % 2 !== 0 && item);
}
