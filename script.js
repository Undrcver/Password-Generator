var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v']
var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numb = [1,2,3,4,5,6,7,8,9]
var specialChars = ['!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']
var generatedPassword = ""

var generateBtn = document.querySelector("#generate");


function generatePass() {
  
  var userChoice = window.prompt ('How many letters would you like the password to contain?'); 
  if (!userChoice) {
    return;
  };
  
  userChoice = parseInt(userChoice);
  numberOfChars = userChoice;
 
  if (numberOfChars < 8 || numberOfChars > 128) {
    window.alert(' Password must be a minimum of 8 characters Please try again.');
  };


  var getUpperCase = window.confirm('Would you like some uppercase letters?');
  
  var lowerCase =  window.confirm('Would you like some lowercase letters?');
 
  var confirmNumbs =  window.confirm('Would you like to add some numbers?');
 
  var confirmSpecialChars = window.confirm('Would you like to add some special characters?');
 
  if (getUpperCase === true) {
    getUpperCase = Math.floor(Math.random()* upperChars.length +1 ); 
    generatedPassword = generatedPassword.concat(upperChars[getUpperCase]);
  };

  if (lowerCase === true) {
    lowerCase = Math.floor(Math.random()* chars.length +1 );
    generatedPassword = generatedPassword.concat(chars[lowerCase]);
  };
    
  if (confirmNumbs === true) {
    confirmNumbs = Math.floor(Math.random()* numb.length +1 );
    generatedPassword = generatedPassword.concat(numb[confirmNumbs]);
  };

  if (confirmSpecialChars === true) {
    confirmSpecialChars = Math.floor(Math.random()* specialChars.length +1 );
    generatedPassword = generatedPassword.concat(specialChars[confirmSpecialChars]);
  };

  for (i = generatedPassword.length; i < numberOfChars; i++) {
    addFillerChars = (chars[i]);
    generatedPassword += addFillerChars;
    
  }
 
  return generatedPassword;
};


function writePass() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

};


generateBtn.addEventListener("click", writePass);