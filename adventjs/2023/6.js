function maxDistance(movements) {
  let distance = 0;
  let right = 0;
  let left = 0;

  for (const movement of movements) {
    if (movement === ">") {
      right++;
    } else if (movement === "<") {
      left++;
    }
  }

  const extra = movements.length - (right + left);
  distance = right - left;

  return Math.abs(distance) + extra;
}
