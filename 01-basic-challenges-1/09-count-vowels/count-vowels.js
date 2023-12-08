function countVowels(str) {
  const normalizedInArray = str.toLowerCase().split('');
  let count = 0;

  for (let char of normalizedInArray) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
        count++;
      }
  }

  return count;
}

module.exports = countVowels;
