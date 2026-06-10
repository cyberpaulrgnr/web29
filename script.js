let sendFeedbackBtn = document.getElementById("sendFeedbackBtn");
let yourName = document.getElementById("yourName");
let email = document.getElementById("email");
let yourThoughts = document.getElementById("yourThoughts");

sendFeedbackBtn.addEventListener("click", () => {
    let yourNameValue = yourName.value;
    let emailValue = email.value;
    let yourThoughtsValue = yourThoughts.value;

    if (yourName.value == "") {
        alert(`You should put something in your name`);
    } else if (email.value == "") {
        alert("You should put something in email address");
    } else if (yourThoughts.value == "") {
        alert("You should put something in your thoughts");
    } else {
        alert(`The sender's name is ${yourNameValue} and his/her email is ${emailValue} and he/she wants to say to you ${yourThoughtsValue}`);
    }
})