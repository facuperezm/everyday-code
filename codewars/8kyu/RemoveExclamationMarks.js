// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  return s.includes("!") ? s.split("!").join("") : s;
}
