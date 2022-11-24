function Algo() {
  this.reverse = function (str) {
    return str.split('').reverse().join('')
  };

  this.isPalindrome = function (str) {
    return this.reverse(str) === str
  };

  this.capitalize = function (str) {
    return str
      .split(' ')
      .map(it => it[0].toUpperCase() + it.substring(1))
      .join(' ')
  };
}



module.exports = Algo;
