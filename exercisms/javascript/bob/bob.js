var Bob = function(input) {
    this.value = input;
};

Bob.prototype.hey = function(string) {
    if (string[string.length - 1] === "?" && string === string.toUpperCase()) {
      return "Whoa, chill out!";
    }
    if (string === string.toUpperCase()){
        return "Whoa, chill out!";
    }
    if(string[string.length-1] === "?"){
        return "Sure.";
    }
    if (string === string.toUpperCase() && string[string.length - 1] === "!") {
       return "Whoa, chill out!";
    }
    if (string[string.length - 1] === "!") {
      return "Whatever.";;
    }
    return "Whatever.";
};

module.exports = Bob;