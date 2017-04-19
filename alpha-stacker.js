
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// The stackLetter function should accept the array as the sole argument
var stackResult = "";
function stackLetters (theAlphabetArray) {
      for (var i = 0; i < theAlphabetArray.length; i++) {
        stackResult += alphabet[i];
        console.log(stackResult);
      }
}
// Invoke the function and pass in the array
stackLetters(alphabet);
