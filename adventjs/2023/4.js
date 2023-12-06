function decode(message) {
  const stack = [];
  let result = "";

  for (let i = 0; i < message.length; i++) {
    const char = message[i];

    if (char === "(") {
      stack.push(result);
      result = "";
    } else if (char === ")" && stack.length > 0) {
      const reversedSubstring = result.split("").reverse().join("");
      result = stack.pop() + reversedSubstring;
    } else {
      result += char;
    }
  }

  return result;
}
