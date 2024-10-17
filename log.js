function validation() {
    const username = document.forms["Formfill"]["Username"].value;
    const password = document.forms["Formfill"]["password"].value;

    // Check if username field is empty
    if (username === "") {
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    }
    
    // Check if username is at least 3 characters
    if (username.length < 3) {
        document.getElementById("result").innerHTML = "At least three letters*";
        return false;
    }
    
    // Check if password field is empty
    if (password === "") {
        document.getElementById("result").innerHTML = "Enter Your Password*";
        return false;
    }
    
    // Check if password is at least 6 characters
    if (password.length < 6) {
        document.getElementById("result").innerHTML = "Password must be at least 6 characters*";
        return false;
    }

    // Store data in local storage
    const userData = { username: username, password: password };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Show popup
    document.getElementById('popup').classList.add("open-slide");
    
    return false; // Prevent form submission to show the popup
}
