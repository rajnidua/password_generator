// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password =  generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password; 
  passwordText.setAttribute('style','color:white;background-color:gray;');//set the styling for the password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// function to verify the required criteria for password and return the generated password value in the variable password
function generatePassword(){
  var lowerCase=false;
  var upperCase = false;
  var numeric = false;
  var specialCharacter = false;
  var passwordCriteria = false;
  var passwordStr="";
  var lowerCaseStr = "";
  var upperCaseStr = "";
  var numericStr = "";
  var specialCharacterStr = "";
  var myPassword="";


  var length=window.prompt("Enter the length of the password, Length can be between 8 to 128 characters");
    console.log("The length is "+length);
    if (length<8 || length>128 || length == isNaN)
      {
        length=window.alert("Not a valid value for length, choose a length of at least 8 characters and no more than 128 characters");
        console.log("The length of the password is: "+length);
        myPassword="";
        return myPassword;
      }
          
  lowerCase=window.confirm("Do you want to include lowercase?");
    if(lowerCase ===true){
      lowerCaseStr="abcdefghijklmnopqrstuvwxyz";
      console.log("lower case String is: "+lowerCaseStr);
      passwordStr=passwordStr.concat(lowerCaseStr);
      console.log("concatenation of lower case string is: "+passwordStr);
    }

  upperCase=window.confirm("Do you want to include uppercase?");
    if(upperCase ===true){
      upperCaseStr=lowerCaseStr.toUpperCase();
      console.log("upper case String is: "+upperCaseStr);
      passwordStr=passwordStr.concat(upperCaseStr);
      console.log("concatenation of upper case string is: "+passwordStr);
    }

  numeric=window.confirm("Do you want to include numeric?");
    if(numeric===true){
      numericStr="0123456789";
      console.log("The numeric string is: "+numericStr);
      passwordStr=passwordStr.concat(numericStr);
      console.log("concatenation of numeric string is: "+passwordStr);
    }

  specialCharacter=window.confirm("Do you want to include special character?");
    if(specialCharacter===true){
      specialCharacterStr="[-!$%^&*()_+|~=`{}:/;<>?,.@#]";
      console.log("Special character string is: "+specialCharacterStr);
      passwordStr=passwordStr.concat(specialCharacterStr);
      console.log("concatenation of special character string is: "+passwordStr);
    }

    if(lowerCase === true || upperCase === true || numeric===true || specialCharacter === true){
      passwordCriteria=true;
      console.log("The password criteria is : "+passwordCriteria);
      myPassword=createPassword(passwordStr,length);
      console.log("The final password returned is: "+myPassword);
      console.log("value of my Password with criteria is:   "+myPassword);
      }else{
      myPassword="";
      window.alert("Password must include at least one character type.\nPlease click Generate Password button again to select the options.");
    }
    return myPassword;
}

//inputs the concatenated value from the password criteria and generates random values
function createPassword( passwordStr,  length){
  var result="";
  for(var i=0;i<length;i++){
    result+=passwordStr.charAt(Math.floor(Math.random()*passwordStr.length));
    console.log("character for position  "+i+"is: "+result);
  }
    console.log("FINAL:character for position "+i+" is: "+result);
    return result;
} 

