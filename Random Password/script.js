const passwordBox = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "@#$%^&*()_+~|}{[]></-="

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    if(passwordBox.value == "") {
        const errorMessage = document.querySelector(".error-message");
        errorMessage.style.display = "block";

        setTimeout(function(){
            errorMessage.style.display = "none";
        }, 3000);
    } else {
    passwordBox.select();
    document.execCommand("copy");

    const copiedMessage = document.querySelector(".copied-message");
    copiedMessage.style.display = "block";

    setTimeout(function() {
        copiedMessage.style.display = "none";
    }, 3000);
    }
}