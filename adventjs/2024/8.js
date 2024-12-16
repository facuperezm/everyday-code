/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */

function drawRace(indices, length) {
  let result = [];

  for (let i = 0; i < indices.length; i++) {
    let lane;
    if (indices[i] === 0) {
      lane = "~".repeat(length);
    } else {
      let position = indices[i] < 0 ? length + indices[i] : indices[i];

      lane = "~".repeat(position) + "r" + "~".repeat(length - position - 1);
    }
    result.push(" ".repeat(indices.length - i - 1) + lane + ` /${i + 1}`);
  }

  return result.join("\n");
}
