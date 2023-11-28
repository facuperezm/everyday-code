// Code

// Testcase
// Testcase
// Test Result

// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function (strs) {
  if (strs === "") return "";
  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === "") {
        break;
      }
    }
  }

  return prefix;
};
