var generateBtn = document.querySelector("#generate");
function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

//created arrays for each set of characters for the 
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numChars = ["0","1","2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars= [" ", "!", "#", "$", "%", "&","'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~",];
  var chars = []
  var passwordLength = "";
  var specialConfirm;
  var numConfirm;
  var upperConfirm;
  var lowerConfirm;

function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like? ");
  while (passwordLength < 8 || passwordLength > 128) {
    alert ("Must be between 8 - 128 characters!")
    var passwordLength = window.prompt("How many characters would you like? ");
  }
  var specialConfirm = confirm("Would you like to use Special Characters?");
  var numConfirm = confirm("Would you like to use Numbers?");
  var upperConfirm = confirm("Would you like to use Upper Case?");
  var lowerConfirm = confirm("Would you like to use Lower Case?");
  while (specialConfirm === false && numConfirm === false && upperConfirm === false && lowerConfirm === false) {
    alert ("One option must be selected!")
    var specialConfirm = confirm("Would you like to use Special Characters?");
    var numConfirm = confirm("Would you like to use Numbers?");
    var upperConfirm = confirm("Would you like to use Upper Case?");
    var lowerConfirm = confirm("Would you like to use Lower Case?");
  }
  if (specialConfirm) {
    chars = chars.concat (specialChars)
  }
  
  if (numConfirm) {
    chars = chars.concat (numChars)
  }
  if (upperConfirm) {
    chars = chars.concat (upperCase)
  }
  if (lowerConfirm) {
    chars = chars.concat (lowerCase)
    }
  var completedPassword = ""
  for (var i=0; passwordLength > i; i++) {
    completedPassword = completedPassword + chars[Math.floor(Math.random() * chars.length)];
  } 
  return completedPassword;
}
