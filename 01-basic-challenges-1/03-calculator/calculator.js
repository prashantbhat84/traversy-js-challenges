function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/": {
      if (num2 === 0) {
        throw new Error(" Divide by 0 exception");
      }
      return num1 / num2;
    }
    default:
      throw new Error("Invalid Operator");
  }
}

module.exports = calculator;
