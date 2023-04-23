// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x) {
  const words = x.split(" ");

  words.sort((a, b) => {
    const lastCharA = a[a.length - 1].toLowerCase();
    const lastCharB = b[b.length - 1].toLowerCase();

    if (lastCharA < lastCharB) {
      return -1;
    } else if (lastCharA > lastCharB) {
      return 1;
    } else {
      return words.indexOf(a) - words.indexOf(b);
    }
  });

  return words;
}
