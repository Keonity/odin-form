const form = document.getElementById("form");

const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("passw");
const confirmPassword = document.getElementById("cPassW");

const formError = document.querySelector(".error");

firstName.addEventListener("input", (event) => {
    console.log(`First name validity: ` + firstName.validity.valid);
    if (firstName.validity.valid) {
        formError.textContent = "";
        formError.className = "error";
    }
    else {
        if (firstName.validity.valueMissing) {
            formError.textContent = "You need to enter a first name.";
        }
        formError.className = "error active";
    };
});

lastName.addEventListener("input", (event) => {
    console.log(`Last name validity: ` + lastName.validity.valid);
    if (lastName.validity.valid) {
        formError.textContent = "";
        formError.className = "error";
    }
    else {
        if (lastName.validity.valueMissing) {
            formError.textContent = "You need to enter a last name.";
        }
        formError.className = "error active";
    };
});

email.addEventListener("input", (event) => {
    console.log(`Email validity: ` + email.validity.valid);
    if (email.validity.valid) {
        formError.textContent = "";
        formError.className = "error";
    }
    else {
        if (email.validity.valueMissing) {
            formError.textContent = "You need to enter an email.";
            console.log("You need to enter an email.");
        }
        else if (email.validity.typeMismatch) {
            formError.textContent = "You need to enter a valid email.";
            console.log("You need to enter a valid email.");
        }
        else if (email.validity.tooShort) { 
            formError.textContent = "Your email needs to be at least 5 characters long.";
            console.log("Email must be 5 chars long");
        }
        formError.className = "error active";
    }
});

phone.addEventListener("input", (event) => {
    console.log(`Phone validity: ` + phone.validity.valid);
    if (phone.validity.valid) {
        formError.textContent = "";
        formError.className = "error";
    }
    else {
        if (phone.validity.valueMissing) {
            formError.textContent = "You need to enter a phone number.";
        }
        else if (phone.validity.typeMismatch) {
            formError.textContent = "You need to enter a valid phone number.";
        }
        else if (phone.validity.tooShort) { 
            formError.textContent = "Your phone number needs to be at least 10 characters long.";
        }
        formError.className = "error active";
    }
});

password.addEventListener("input", (event) => {
    console.log(`Password validity: ` + (confirmPassword.value === password.value));
    password.setCustomValidity("");
    if (password.validity.valid && (confirmPassword.value === password.value)) {
        formError.textContent = "";
        formError.className = "error";
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
    else {
        if (password.validity.valueMissing) {
            formError.textContent = "You need to enter a password.";
        }
        else if (password.validity.typeMismatch) {
            formError.textContent = "You need to enter a valid password.";
        }
        else if (password.value !== confirmPassword.value) { 
            formError.textContent = "Passwords need to match.";
            password.setCustomValidity("Passwords must match.");
            confirmPassword.setCustomValidity("Passwords must match.");
        }
        formError.className = "error active";
    }
});

confirmPassword.addEventListener("input", (event) => {
    console.log(`Confirm password validity: ` + (confirmPassword.value === password.value));
    confirmPassword.setCustomValidity("");
    if (confirmPassword.validity.valid && (confirmPassword.value === password.value)) {
        formError.textContent = "";
        formError.className = "error";
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
    else {
        if (confirmPassword.validity.valueMissing) {
            console.log("You need to enter a confirmation password.");
            formError.textContent = "You need to enter a confirmation password.";
        }
        else if (confirmPassword.validity.typeMismatch) {
            formError.textContent = "You need to enter a valid confirmation password.";
        }
        else if (confirmPassword.value !== password.value) { 
            console.log(`Passwords need to match (Confirmation)`);
            formError.textContent = "Passwords need to match.";
            confirmPassword.setCustomValidity("Passwords must match.");
            password.setCustomValidity("Passwords must match.");
        }
        formError.className = "error active";
    }
});

form.addEventListener("submit", (event) => {
    if (firstName.validity.valid) {
        formError.textContent = "";
        formError.className = "error";
    }
    else {
        event.preventDefault();
        if (firstName.validity.valueMissing) {
            formError.textContent = "You need to enter a first name.";
        }
        formError.className = "error active";
    };

    if (lastName.validity.valid) {
        formError.textContent = "";
        formError.className = "error";
    }
    else {
        event.preventDefault();
        if (lastName.validity.valueMissing) {
            formError.textContent = "You need to enter a last name.";
        }
        formError.className = "error active";
    };

    if (email.validity.valid) {
        formError.textContent = "";
        formError.className = "error";
    }
    else {
        event.preventDefault();
        if (email.validity.valueMissing) {
            formError.textContent = "You need to enter an email.";
            console.log("You need to enter an email.");
        }
        else if (email.validity.typeMismatch) {
            formError.textContent = "You need to enter a valid email.";
            console.log("You need to enter a valid email.");
        }
        else if (email.validity.tooShort) { 
            formError.textContent = "Your email needs to be at least 5 characters long.";
            console.log("Email must be 5 chars long");
        }
        formError.className = "error active";
    };

    if (phone.validity.valid) {
        formError.textContent = "";
        formError.className = "error";
    }
    else {
        event.preventDefault();
        if (phone.validity.valueMissing) {
            formError.textContent = "You need to enter a phone number.";
        }
        else if (phone.validity.typeMismatch) {
            formError.textContent = "You need to enter a valid phone number.";
        }
        else if (phone.validity.tooShort) { 
            formError.textContent = "Your phone number needs to be at least 10 characters long.";
        }
        formError.className = "error active";
    };

    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
    if (password.validity.valid && (confirmPassword.value === password.value)) {
        formError.textContent = "";
        formError.className = "error";
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
    else {
        event.preventDefault();
        if (password.validity.valueMissing) {
            formError.textContent = "You need to enter a password.";
        }
        else if (password.validity.typeMismatch) {
            formError.textContent = "You need to enter a valid password.";
        }
        else if (password.value !== confirmPassword.value) { 
            formError.textContent = "Passwords need to match.";
            password.setCustomValidity("Passwords must match.");
            confirmPassword.setCustomValidity("Passwords must match.");
        }
        formError.className = "error active";
    }

    if (confirmPassword.validity.valid && (confirmPassword.value === password.value)) {
        formError.textContent = "";
        formError.className = "error";
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
    else {
        event.preventDefault();
        if (confirmPassword.validity.valueMissing) {
            console.log("You need to enter a confirmation password.");
            formError.textContent = "You need to enter a confirmation password.";
        }
        else if (confirmPassword.validity.typeMismatch) {
            formError.textContent = "You need to enter a valid confirmation password.";
        }
        else if (confirmPassword.value !== password.value) { 
            console.log(`Passwords need to match (Confirmation)`);
            formError.textContent = "Passwords need to match.";
            confirmPassword.setCustomValidity("Passwords must match.");
            password.setCustomValidity("Passwords must match.");
        }
        formError.className = "error active";
    }
})