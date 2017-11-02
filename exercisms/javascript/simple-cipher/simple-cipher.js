var Cipher = function() {
  var key = "";
  var possible =
    //"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 10; i++)
    key += possible.charAt(Math.floor(Math.random() * possible.length));
  this.key = key;
};

Cipher.prototype.encode = function() {
  if (this.value % 400 === 0) {
    return true;
  }
  if (this.value % 100 === 0) {
    return false;
  }
  if (this.value % 4 === 0) {
    return true;
  }
  return false;
};

Cipher.prototype.decode = function() {
  if (this.value % 400 === 0) {
    return true;
  }
  if (this.value % 100 === 0) {
    return false;
  }
  if (this.value % 4 === 0) {
    return true;
  }
  return false;
};

module.exports = Cipher;
