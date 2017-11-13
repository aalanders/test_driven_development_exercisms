var alpha = "abcdefghijklmnopqrstuvwxyz".split("");

var Cipher = function(key) {
  this.key = key || generateKey();
};

Cipher.prototype.encode = function() {};

Cipher.prototype.decode = function() {};

var generateKey = function() {
  var random = "";
  for (var i = 0; i < 10; i++) {
    randomChar = alpha[Math.floor(Math.random() * (122 - 97 + 97))];
    random += randomChar;
  }
  return random;
};

module.exports = Cipher;
