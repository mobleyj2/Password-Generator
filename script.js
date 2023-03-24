


var Special = ['!', '@', '#', '$', '%', "&", '*', '(', ')', '+', '=', '//', '-', '~', '`', '{', '}',
  ']', '[', '|', '_',
];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];



function getPasswordOptions(){

  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

if (Number.isNaN(length)) {
  alert('Password length must be provided as a number');
return null;
}

if (length < 8) {
  alert('Password length must be at least 8 characters');
  return null;
}
if (length > 128) {
  alert('Password length must less than 128 characters');
return null;
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
 return null;
}

var passwordOptions = {
  length: length,
  hasSpecial: hasSpecial,
  hasnumbers: hasnumbers,
  haslowercase: haslowercase,
  hasuppercase: hasuppercase,
};
return passwordOptions;


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password 
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password 
  var result = [];

  // Array to store types of characters 
  var possibleCharacters = [];

  // Array to contain one of each type 
  var guaranteedCharacters = [];

  // Check if an options object exists
  if (!options) return null;

  // Push new random special character
  if (options.hasSpecial) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Push new random special character
  if (options.hasnumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  // Push new random lower-cased character
  if (options.haslowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }

  // Push new random upper-cased character
  if (options.hasuppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');

  }
function gen (){
  var generateBtn = document.querySelector('#generate');

}






function writePassword() {

  var password = generatePassword();
  var passwordText =document.querySelector('#password');
 passwordText.value= password;

generateBtn.addEventListener('click', writePassword);
}
}