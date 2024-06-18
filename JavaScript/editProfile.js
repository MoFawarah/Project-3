

let firstNameData = document.getElementById("firstName");
let lastNameData = document.getElementById("lastName");
let emailData = document.getElementById("email");
let genderData = document.getElementById("gender");
let mobileData = document.getElementById("mobile")
let saveButton = document.getElementById("saveButton");

// Ensure all required elements exist
if (firstNameData && lastNameData && emailData && genderData && saveButton) {
    // Parse the users from localStorage safely
    let localStorageUsers = JSON.parse(localStorage.getItem('users')) || [];
    let sessionCurrentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    // Ensure sessionCurrentUser is not null and has an email property
    if (sessionCurrentUser && sessionCurrentUser.email) {
        for (let i = 0; i < localStorageUsers.length; i++) {
            if (sessionCurrentUser.email === localStorageUsers[i].email) {
                saveButton.addEventListener('click', function () {
                    localStorageUsers[i].firstName = firstNameData.value || localStorageUsers[i].firstName;
                    localStorageUsers[i].lastName = lastNameData.value || localStorageUsers[i].lastName;
                    localStorageUsers[i].email = emailData.value || localStorageUsers[i].email;
                    localStorageUsers[i].gender = genderData.value || localStorageUsers[i].gender;
                    localStorageUsers[i].phoneNumber = mobileData.value || localStorageUsers[i].phoneNumber;

                    // Save the updated users array back to localStorage
                    localStorage.setItem('users', JSON.stringify(localStorageUsers));
                    sessionStorage.setItem('loggedInUser', JSON.stringify(localStorageUsers[i]))
                });
                break; // Exit the loop once the user is found
            }
        }
    } else {
        console.error("No logged in user found in sessionStorage.");
    }
} else {
    console.error("One or more required elements are missing from the DOM.");
}
