var generateBtn = document.querySelector("#generate");

function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = [" ", "!", "#", "$", "%", "&","'", "(", "U+0022", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "U+005C"];
  var passwordLength = window.prompt("How many characters would you like? ");
  var passwordLengthInt =parseInt(passwordLength);
    if (passwordLengthInt < 8) {
       alert("Must be 8 characters or more!")
    } else if (passwordLengthInt > 128) {
      alert("Must be 128 characters or less!")
    }
}