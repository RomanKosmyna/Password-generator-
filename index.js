const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstEl = document.getElementById("first-pass");
let secondEl = document.getElementById("second-pass");
let passwordLength = 15
/* First Password starts */
function getRandomChar() {
   let randomChar = Math.floor( Math.random() * characters.length )
   return characters[randomChar]
}

function generateRandomPass() {
    let randomPassword = ''
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomChar()
    }
    return randomPassword
}
let generatedFirstPassword = generateRandomPass();
/* First Password ends */

/* Second Password starts */
function getRandomCharTwo() {
    let randomChar = Math.floor( Math.random() * characters.length )
    return characters[randomChar]
}

function generateRandomPassTwo() {
    let randomPassword = ''
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharTwo()
    }
    return randomPassword
}
let generatedSecondPassword = generateRandomPassTwo();
/* Second Password ends */

function getPass() {
    firstEl.textContent = generatedFirstPassword;
    secondEl.textContent = generatedSecondPassword;
}