// I wasn't able to solve this leetcode problem on my own.
// I had to look at the solution, and ChatGPT helped me understand it.

// Solution 1
function isIsomorphic(s, t) {
  // Create two empty objects to map characters from s to t and vice versa
  const s_to_t = {};
  const t_to_s = {};

  // Iterate over each character in the strings
  for (let i = 0; i < s.length; i++) {
    // Check if the current character in s is already mapped
    if (s[i] in s_to_t) {
      // If mapped, check if the mapped character is the same as the current character in t
      if (s_to_t[s[i]] !== t[i]) {
        // If not, the strings are not isomorphic
        return false;
      }
    } else {
      // If not mapped, create a mapping from the current character in s to t
      s_to_t[s[i]] = t[i];
    }

    // Check if the current character in t is already mapped
    if (t[i] in t_to_s) {
      // If mapped, check if the mapped character is the same as the current character in s
      if (t_to_s[t[i]] !== s[i]) {
        // If not, the strings are not isomorphic
        return false;
      }
    } else {
      // If not mapped, create a mapping from the current character in t to s
      t_to_s[t[i]] = s[i];
    }
  }

  // If the loop completes, the strings are isomorphic
  return true;
}
