function countOccurrences(str, char) {
  let occurences = 0;
  for (let letter of str) {
    if (letter === char) {
      occurences++;
    }
  }
  return occurences;
}

module.exports = countOccurrences;
