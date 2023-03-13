//Have the function CodelandUsernameValidation(str) take the str 
//parameter being passed and determine if the string is a valid 
//username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.

function CodelandUsernameValidation(str) {
  // Check length
  if (str.length < 4 || str.length > 25) {
    return "false";
  }
  
  // Check first character
  const firstChar = str[0];
  if (!(/[a-zA-Z]/).test(firstChar)) {
    return "false";
  }
  
  // Check for invalid characters
  const regex = /^[a-zA-Z0-9_]+$/;
  if (!regex.test(str)) {
    return "false";
  }
  
  // Check last character
  const lastChar = str[str.length - 1];
  if (lastChar === "_") {
    return "false";
  }
  
  // If all checks pass, return true
  return "true";
}