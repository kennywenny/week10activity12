const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    const expected = 'neb'

    const actual = new Algo().reverse('ben')
    
    expect(actual).toBe(expected)
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
});
