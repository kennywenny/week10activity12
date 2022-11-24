function Algo() {}

Algo.prototype.reverse = function(str) {
  return str.split('').reverse().join('')
};

Algo.prototype.isPalindrome = function(str) {
  return true
};

Algo.prototype.capitalize = function(str) {};

module.exports = Algo;
