
// Assignment Code
var generateBtn = document.querySelector("#generate");
var Special = ['!', '@', '#', '$', '%', "&", '*', '(', ')', '+', '=', '//', '-', '~', '`', '{', '}',
  ']', '[', '|', '_',
];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];





  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

if (Number.isNaN(length)) {
  alert('Password length must be provided as a number');

}

if (length < 8) {
  alert('Password length must be at least 8 characters');

}
if (length > 128) {
  alert('Password length must less than 129 characters');

}
var hasSpecial = confirm(
  'Click OK to confirm including special characters.'
)
var hasnumbers = confirm(
  'Click OK to confirm including numeric characters.'
)

var haslowercase = confirm(
  'Click OK to confirm including lowercase characters.'
)
var hasuppercase = confirm(
  'Click OK to confirm including uppercase characters.'
)

if (
  hasSpecial === false &&
  hasnumbers === false &&
  haslowercase === false &&
  hasuppercase === false
) {
  alert('Must select at least one character type');
 
}

var passwordOptions = {
  length: length,
  hasSpecial: hasSpecial,
  hasnumbers: hasnumbers,
  haslowercase: haslowercase,
  hasuppercase: hasuppercase,
};

//return passwordOptions;

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumeric) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.haslowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasuppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
console.log ()

// Write password to the #password input


generateBtn.addEventListener('click', password);

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = document.addEventListener("#generate");
  document.querySelector("password").click= prompt;
}
