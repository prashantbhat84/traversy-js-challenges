const getSum = require("./get-sum");

describe("calculate sum of two numbers", () => {
  test("Calculating the sum of two numbers when both are integers", () => {
    // Test case inputs
    const num1 = 5;
    const num2 = 7;

    // Call the function
    const result = getSum(num1, num2);

    // Check if the result is equal to the expected sum
    expect(result).toBe(12);
  });
  test("returns 0 when one or both are non-integers", () => {
    const num1 = "0";
    const num2 = 9;
    const result = getSum(num1, num2);
    expect(result).toBe(0);
  });
});
