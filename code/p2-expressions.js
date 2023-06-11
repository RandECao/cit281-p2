/*
    CIT 281 Project 2
    Name: Randy Cao
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
}
console.log(result);

//returns a random letter from the alphabet
const getRandomLetters = function(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}
// Updating the for loop to call getRandomLetter()
for (let i = 0; i < 5; i++) {
    console.log(getRandomLetters());
  }

//Generates a random string with a length between minLength and maxLength
const getRandomString = function(minLength, maxLength){
    const randomLength = getRandomInteger(minLength, maxLength);
    let randomString = "";
  
//updated for loop that makes random string
    for (let i = 0; i < randomLength; i++) {
      randomString += getRandomLetters();
    }
    return randomString;
  }
  const minLength = 10;
  const maxLength = 20;
  console.log(getRandomString(minLength, maxLength));

  const getSortedString = function(string){
    return string.split('').sort().join('');
  }
  console.log(getSortedString(getRandomString(10,20)))