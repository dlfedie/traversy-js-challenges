// function countOccurrences(str, char) {
//   let occurences = 0;
//   for (let letter of str) {
//     if (letter === char) {
//       occurences++;
//     }
//   }

//   return occurences;
// }

const countOccurrences = (str, char) => {
  // console.log(str.split(char));
  // console.log(str.split(char).length - 1);

  return str.split(char).length - 1;
}

module.exports = countOccurrences;
