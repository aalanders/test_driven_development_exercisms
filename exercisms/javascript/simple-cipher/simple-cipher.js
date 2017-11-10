var alpha = "abcdefghijklmnopqrstuvwxyz".split("");

var Cipher = function(key) {
  this.key = key;
};

Cipher.prototype.encode = function(string) {};

Cipher.prototype.decode = function() {};

module.exports = Cipher;
