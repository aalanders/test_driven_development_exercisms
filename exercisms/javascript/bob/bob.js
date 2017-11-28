var Bob = function(input) {
    this.value = input;
};

Bob.prototype.hey = function(string) {
    var numbers = /^[0-9][,]*/.test(string)
    //silence
    if(string.split('').join('').length === 0){
        return "Fine. Be that way!"
    }
    if(string.split(' ').join('').length === 0){
        return "Fine. Be that way!"
    }
    //if numbers and ending in ?
    if(numbers === true && string[string.length-1] === "?"){
        return "Sure."
    }
    //if numbers and ending in ?
    if(numbers === true && string[string.length-1] === "?"){
        return "Sure."
    }
    //if ending in ? and capitalized
    if (string[string.length - 1] === "?" && string === string.toUpperCase()) {
      return "Whoa, chill out!";
    }
    //if ending in ?
    if(string[string.length-1] === "?"){
        return "Sure.";
    }
    //if capitalized and ending in !
    if (string === string.toUpperCase() && string[string.length - 1] === "!") {
       return "Whoa, chill out!";
    }
    //if only numbers
    if (numbers === true) {
      return "Whatever.";
    }
    //if yelling
    if (string === string.toUpperCase()){
      return "Whoa, chill out!";
    }
    //if exclamation point at end
    if (string[string.length - 1] === "!") {
      return "Whatever.";;
    }
    return "Whatever.";
};

module.exports = Bob;