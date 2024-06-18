


let firstNameData = document.getElementById("firstName");
let lastNameData = document.getElementById("lastName");
let emailData = document.getElementById("email");
let genderData = document.getElementById("gender");
let mobileData = document.getElementById("mobile")

if (firstNameData && lastNameData && emailData && genderData) {
    // let localStorageUsers = JSON.parse(localStorage.getItem('users')) || [];
    let sessionCurrentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));


    //dobule check that we have data in sessionStorage
    if (sessionCurrentUser && sessionCurrentUser.email) {
         
            if (sessionCurrentUser.email) {
                firstNameData.innerHTML = sessionCurrentUser.firstName;
                lastNameData.innerHTML = sessionCurrentUser.lastName;
                emailData.innerHTML = sessionCurrentUser.email;
                genderData.innerHTML = sessionCurrentUser.gender;
                mobileData.innerHTML = sessionCurrentUser.phoneNumber;

            }
        
    } else {
        console.error("No logged in user found in sessionStorage.");
    }
} else {
    console.error("One or more required elements are missing from the DOM.");
}
