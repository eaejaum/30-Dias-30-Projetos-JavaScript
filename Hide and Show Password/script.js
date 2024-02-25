let passwordInput = document.querySelector(".password");
let eyeIcon = document.getElementById("icon");

eyeIcon.onclick = function(){
    
    if (passwordInput.type == "password"){
    
        passwordInput.type = "text";
        eyeIcon.src = "images/eye-open.png"

    } else {

        passwordInput.type = "password";
        eyeIcon.src = "images/eye-close.png"

    }
}