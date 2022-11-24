function Algo() { }

Algo.prototype.reverse = function (str) {
  return str.split('').reverse().join('')
};

Algo.prototype.isPalindrome = function (str) {
  return this.reverse(str) === str
};

Algo.prototype.capitalize = function (str) {
  return str
    .split(' ')
    .map(it => it[0].toUpperCase() + it.substring(1))
    .join(' ')
};

module.exports = Algo;
