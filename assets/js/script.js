// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Get password length from user
  var pswdLenStr;
  var pswdLen = 0;
  while(Number.isNaN(pswdLen) || pswdLen<8 || pswdLen>128) {
    pswdLenStr = prompt("Please enter password length [in the range 8-128]");
    pswdLen = Number(pswdLenStr);
    if (Number.isNaN(pswdLen) || pswdLen<8 || pswdLen>128) {
      alert("Please enter a number from 8 to 128");
    }
  }
  //console.log("pswd length:" + pswdLen);

  // Get character types from user
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumbers = false;
  var includeSpecial = false;
  while(!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
    includeLowercase = confirm("Should the password include lowercase letters? [OK/Yes][Cancel/No]");
    includeUppercase = confirm("Should the password include uppercase letters? [OK/Yes][Cancel/No]");
    includeNumbers = confirm("Should the password include numbers? [OK/Yes][Cancel/No]");
    includeSpecial = confirm("Should the password include special characters? [OK/Yes][Cancel/No]");
    if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
      alert("The password must include at least one of the following types: lowercase, uppercase, numbers, or speical characters.");
    }
  }
  console.log(`lowercase:${includeLowercase}, uppercase:${includeUppercase}, numbers:${includeNumbers}, special:${includeSpecial}`);
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
