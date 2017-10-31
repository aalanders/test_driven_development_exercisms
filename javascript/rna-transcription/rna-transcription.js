var DnaTranscriber = function(input) {
  this.value = input;
};

DnaTranscriber.prototype.toRna = function() {
  var answer = "";
  return this.value;
  for (var i = 0; i < value.length; i++) {
    if (this.value[i] === "A") {
      answer.concat("U");
    }
    if (this.value[i] === "T") {
      answer.concat("A");
    }
    if (this.value[i] === "C") {
      answer.concat("G");
    }
    if (this.value[i] === "G") {
      answer.concat("C");
    }
  }
  if (answer === "" || answer.length !== value.length) {
    return "Invalid input";
  }
  return answer;
};

module.exports = DnaTranscriber;
