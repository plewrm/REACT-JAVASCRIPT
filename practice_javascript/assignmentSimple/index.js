function resetFields() {
    // Set the default values for email and password fields
    var mailname = document.querySelector("#mail");
    var passwordid = document.querySelector("#pass");
    mailname.value = "mymail@gmail.com";
    passwordid.value = "password";
}

function changeText() {
    var chngTxt = document.querySelector("#txt")
    chngTxt.textContent = "My Rock Paper Scissor"
}
