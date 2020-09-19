// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pswdLenStr;
  var pswdLen = 0;
  while(Number.isNaN(pswdLen) || pswdLen<8 || pswdLen>128) {
    pswdLenStr = prompt("Please enter password length [in the range 8-128]");
    pswdLen = Number(pswdLenStr);
    if (Number.isNaN(pswdLen) || pswdLen<8 || pswdLen>128) {
      alert("Please enter a number from 8 to 128");
    }
  }
  console.log("pswd length:" + pswdLen);
  return "Password";
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
