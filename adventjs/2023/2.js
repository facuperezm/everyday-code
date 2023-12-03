// shorter less readable solution

function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    [...gift].every((char) => materials.includes(char))
  );
}

// better solution

function manufacture(gifts, materials) {
  const results = [];
  for (const gift of gifts) {
    let canManufacture = true;
    for (const char of gift) {
      if (!materials.includes(char)) {
        canManufacture = false;
        break;
      }
    }
    if (canManufacture) {
      results.push(gift);
    }
  }
  return results;
}
