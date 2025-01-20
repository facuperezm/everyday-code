// Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

// type indicates if it's a left boot (I) or a right boot (R).
// size indicates the size of the boot.
// Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.

// Note: You can have more than one pair of boots of the same size!

// const shoes = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 },
//   { type: 'R', size: 42 },
//   { type: 'I', size: 41 },
//   { type: 'I', size: 42 }
// ]

// organizeShoes(shoes)
// // [38, 42]

// const shoes2 = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 },
//   { type: 'I', size: 38 },
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 }
// ]
// // [38, 38]

// const shoes3 = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 36 },
//   { type: 'R', size: 42 },
//   { type: 'I', size: 41 },
//   { type: 'I', size: 43 }
// ]

// organizeShoes(shoes3)
// // []

function organizeShoes(shoes) {
  const counts = {};

  for (const shoe of shoes) {
    const { type, size } = shoe;

    if (!counts[size]) {
      counts[size] = { I: 0, R: 0 };
    }

    counts[size][type]++;
  }

  const pairs = [];
  for (const size in counts) {
    const { I, R } = counts[size];
    const pairCount = Math.min(I, R);

    for (let i = 0; i < pairCount; i++) {
      pairs.push(Number(size));
    }
  }

  return pairs;
}
