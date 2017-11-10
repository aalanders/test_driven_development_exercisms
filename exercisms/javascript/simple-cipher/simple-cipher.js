var Cipher = function(key) {
  this.key = key;
};

Cipher.prototype.encode = function(string) {
  var answer = [];
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < alpha.length; j++) {
      if (alpha[i] === string[i]) {
        answer.push(alpha[i + 3]);
        break;
      } else {
        j++;
      }
    }
    i++;
  }
  return answer.join("");
};

Cipher.prototype.decode = function() {};

module.exports = Cipher;
