function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Compare password and confirm password
    if (password !== confirmPassword) {
        document.getElementById("passwordError").textContent = "Passwords do not match";
        return false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Password validation (customize this regex as needed)
    var passwordRegex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "Password must contain at least one digit, one lowercase and one uppercase letter, and be at least 6 characters long.";
        return false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Phone number validation (customize this regex as needed)
    var phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById("phoneNumberError").textContent = "Please enter a valid 10-digit phone number.";
        return false;
    } else {
        document.getElementById("phoneNumberError").textContent = "";
    }

    return true; // Form will submit if passwords match and phone number is valid
}