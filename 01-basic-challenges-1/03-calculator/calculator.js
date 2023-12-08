function calculator(firstNumber, secondNumber, operator) {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    
    case '-':
      return firstNumber - secondNumber;
    
    case '*':
      return firstNumber * secondNumber;
    
    case '/':
      return firstNumber / secondNumber;
    default:
      throw 'Invalid operator given!';
  }
}

module.exports = calculator;
