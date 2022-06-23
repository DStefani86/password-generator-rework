var generateBtn = document.querySelector("#generate");

function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var chars = [];
  
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  var numChars = ["0","1","2", "3", "4", "5", "6", "7", "8", "9"];
  
  var specialChars= [" ", "!", "#", "$", "%", "&","'", "(", "U+0022", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "U+005C"];
  
  var passwordLength = window.prompt("How many characters would you like? ");
  
  while (passwordLength < 8 || passwordLength > 128) {
    alert ("Must be between 8 - 128 characters!")
    var passwordLength = window.prompt("How many characters would you like? ");
  }

  
  var specialConfirm = confirm("Would you like to use Special Characters?");
  
  var numConfirm = confirm("Would you like to use Numbers?");
  
  var upperConfirm = confirm("Would you like to use Upper Case?");
  
  var lowerConfirm = confirm("Would you like to use Lower Case?");
    if (specialConfirm) {
      chars = chars.concat(specialChars)
    }
    if (numConfirm) {
      chars = chars.concat(numChars)
    }
    if (upperConfirm) {
      chars = chars.concat(upperCase)
    }
    if (lowerConfirm) {
      chars = chars.concat(lowerCase)
    }

  for (var i=0; passwordLength > i; i++) {
    charLength = chars.charAt(Math.floor(Math.random() * passwordLength));
    completedPassword = completedPassword.concat(passwordLength)
  }
  return completedPassword
}
