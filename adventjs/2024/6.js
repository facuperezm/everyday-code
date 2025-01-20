// We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

// The box has a present (*) and counts as "inside the box" if:

// It is completely surrounded by # on the box's edges.
// The * is not on the box's edges.
// Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.

// Examples:

// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) // ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) // ➞ true

// inBox([
//   "#####",
//   "#   #",
//   "#  #*",
//   "#####"
// ]) // ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) // ➞ false

function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const row = box[i];

    if (
      row.includes("*") &&
      row.indexOf("*") > 0 &&
      row.indexOf("*") < row.length - 1
    ) {
      return true;
    }
  }
  return false;
}
