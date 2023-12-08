function titleCase(str) {
  // normalize the input
  let words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    // console.log(words[i]);
  }

  return words.join(' ');
}

module.exports = titleCase;
