function isPalindrome(str) {
  const sanitized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = sanitized.split('').reverse().join('');

  return reversed === sanitized;
}

module.exports = isPalindrome;
