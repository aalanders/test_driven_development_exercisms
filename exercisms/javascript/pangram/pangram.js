var Pangram = function(string) {
  this.value = string;
};

Pangram.prototype.isPangram = function() {
  var alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var string = this.value.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (alpha.indexOf(string[i]) > -1) {
      alpha.splice(alpha.indexOf(string[i]), 1);
    }
  }
  if (alpha.length === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = Pangram;
