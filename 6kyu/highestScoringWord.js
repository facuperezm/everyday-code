// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const splited = x.split(" ");
  const getScore = (splited) => {
    return splited.split("").reduce((a, b) => a + b.charCodeAt(0) - 96, 0);
  };
  const score = splited.map((word) => getScore(word));
  let highestIndex = 0;
  let highestScore = 0;
  score.forEach((score, i) => {
    if (score > highestScore) {
      highestIndex = i;
      highestScore = score;
    }
  });
  return splited[highestIndex];
}
