var DnaTranscriber = function(input) {
  this.value = input;
};

DnaTranscriber.prototype.toRna = function(string) {
  var answer = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === "A") {
      answer.push("U");
    }
    if (string[i] === "T") {
      answer.push("A");
    }
    if (string[i] === "C") {
      answer.push("G");
    }
    if (string[i] === "G") {
      answer.push("C");
    }
  }
  if (answer === "" || answer.length !== string.length) {
    throw Error("Invalid input");
  }
  return answer.join("");
};

module.exports = DnaTranscriber;
