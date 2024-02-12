const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener('click',()=>{
    container.classList.add("right-panel-active");
})

signInButton.addEventListener('click',()=>{
    container.classList.remove("right-panel-active");
})    

// document.getElementById("signUpForm").addEventListener("submit", function(event) {
//     var name = document.getElementById("signUpName").value;
//     var email = document.getElementById("signUpEmail").value;
//     var password = document.getElementById("signUpPassword").value;

//     if (name === " " || email === " " || password === " ") {
//         alert("Please fill in all fields");
//         event.preventDefault();
//     }
// });

// document.getElementById("signInForm").addEventListener("submit", function(event) {
//     var email = document.getElementById("signInEmail").value;
//     var password = document.getElementById("signInPassword").value;

//     if (email === "" || password === "") {
//         alert("Please fill in all fields");
//         event.preventDefault();
//     }
// });

// Selecting the sign-up form
// const signUpForm = document.querySelector('#signUpForm');

// // Adding event listener for sign-up form submission
// signUpForm.addEventListener("submit", function(event) {
//     // Getting values of input fields
//     const name = document.querySelector('#signUpName').value;
//     const email = document.querySelector('#signUpEmail').value;
//     const password = document.querySelector('#signUpPassword').value;

//     // Checking if any field is empty
//     if (name === "" || email === "" || password === "") {
//         alert("Please fill in all fields");
//         event.preventDefault(); // Prevent form submission
//     }
// });

// // Selecting the sign-in form
// const signInForm = document.querySelector('#signInForm');

// // Adding event listener for sign-in form submission
// signInForm.addEventListener("submit", function(event) {
//     // Getting values of input fields
//     const email = document.querySelector('#signInEmail').value;
//     const password = document.querySelector('#signInPassword').value;

//     // Checking if any field is empty
//     if (email === "" || password === "") {
//         alert("Please fill in all fields");
//         event.preventDefault(); // Prevent form submission
//     }
// });

// Function to validate the sign-up form
function validateSignUpForm(event) {
    const name = document.querySelector('.sign-up-container input[type="text"]').value;
    const email = document.querySelector('.sign-up-container input[type="email"]').value;
    const password = document.querySelector('.sign-up-container input[type="password"]').value;

    const errorDiv = document.querySelector('.sign-up-container .error');
    errorDiv.innerHTML = '';

    if (name.trim() === "") {
        errorDiv.innerHTML = 'Name is required';
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (email.trim() === "") {
        errorDiv.innerHTML = 'Email is required';
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (password.trim() === "") {
        errorDiv.innerHTML = 'Password is required';
        event.preventDefault(); // Prevent form submission
        return;
    }
}

// Function to validate the sign-in form
function validateSignInForm(event) {
    const email = document.querySelector('.sign-in-container input[type="email"]').value;
    const password = document.querySelector('.sign-in-container input[type="password"]').value;

    const errorDiv = document.querySelector('.sign-in-container .error');
    errorDiv.innerHTML = '';

    if (email.trim() === "") {
        errorDiv.innerHTML = 'Email is required';
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (password.trim() === "") {
        errorDiv.innerHTML = 'Password is required';
        event.preventDefault(); // Prevent form submission
        return;
    }
}

// Add event listeners to the forms
document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.querySelector('.sign-up-container form');
    signUpForm.addEventListener("submit", validateSignUpForm);

    const signInForm = document.querySelector('.sign-in-container form');
    signInForm.addEventListener("submit", validateSignInForm);
});

