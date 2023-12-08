function reverseString(str) {
  const reverse = str.split('').reverse()
  // console.log(reverse)

  return reverse.join('');
}

module.exports = reverseString;
