// 125. Valid Palindrome
// Easy
// Topics
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

var isPalindrome = function (s) {
  if (s === " ") return true;

  const alphanumericString = s
    .toLowerCase()
    .split("")
    .filter((char) => {
      const charCode = char.charCodeAt(0);
      return (
        (charCode >= 97 && charCode <= 122) ||
        (charCode >= 48 && charCode <= 57)
      );
    })
    .join("");

  let left = 0;
  let right = alphanumericString.length - 1;

  while (left < right) {
    if (alphanumericString[left] !== alphanumericString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
