function fizzBuzzArray(num) {
  let outputArray = []

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      outputArray.push('FizzBuzz')
    }
    else if (i % 3 === 0) {
      outputArray.push('Fizz')
    }
    else if (i % 5 === 0) {
      outputArray.push('Buzz')
    }
    else {
      outputArray.push(i)
    }
  }


  return outputArray
}

module.exports = fizzBuzzArray;
