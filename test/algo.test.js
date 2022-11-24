const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should reverse a string", () => {
      const expected = 'neb'

      const actual = new Algo().reverse('ben')

      expect(actual).toBe(expected)
    })
  });

  describe("isPalindrome", () => {
    it("should detect a palindrome", () => {
      const actual = new Algo().isPalindrome('racecar')
      
      expect(actual).toBe(true)
    })
    
    it("should detect non palindrome", () => {
      const actual = new Algo().isPalindrome('ben')

      expect(actual).toBe(false)
    })
  });

  describe("capitalize", () => {
    it("should capitalize all words", () => {
      const expected = "Sam Is Really Good At Something"
      
      const actual = new Algo().capitalize("sam is really good at something")
      
      expect(actual).toBe(expected)
    })
  });
});
