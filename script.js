// Array of special characters to be included in password
var Special = ['!', '@', '#', '$', '%', "&", '*', '(', ')', '+', '=', '//', '-', '~', '`', '{', '}',
  ']', '[', '|', '_',
];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];


// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecial = confirm(
    'Click OK to confirm including special characters.'
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasnumber = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // Variable to store boolean regarding the inclusion of lowercase characters
  var haslowercase= confirm(
    'Click OK to confirm including lowercase characters.'
  )

  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasuppercase = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasSpecial === false &&
    hasnumber === false &&
    haslowercase === false &&
    hasuppercase === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecial: hasSpecial,
    hasnumber: hasnumber,
    haslowercase: haslowercase,
    hasuppercase: hasuppercase,
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(Special);
    guaranteedCharacters.push(getRandom(Special));
  }

  if (options.hasnumber) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.haslowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }

  
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


var generateBtn = document.querySelector('#generate');


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
