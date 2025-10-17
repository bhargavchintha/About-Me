document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear any previous error messages
    clearErrors();

    const name = document.getElementById("Name").value;
    const email = document.querySelector('input[name="Email"]').value;
    const phone = document.querySelector('input[name="PhoneNo"]').value;
    const message = document.querySelector('input[name="Message"]').value;

    let isValid = true;

    // Name Validation: Minimum 3 characters
    if (name.length < 3) {
        displayError('Name', 'Name should be at least 3 characters long.');
        isValid = false;
    }

    // Email Validation: Check if it's a valid email format and real email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        displayError('Email', 'Please enter a valid email address.');
        isValid = false;
    } else {
        // Further check if the email seems to be real (it contains a valid domain)
        const domain = email.split('@')[1];
        if (!domain || domain.length < 3 || !domain.includes('.')) {
            displayError('Email', 'Please enter a valid email address with a proper domain (e.g., example@gmail.com).');
            isValid = false;
        }
    }

    // Phone Validation: Must be 10 digits
    if (!/^\d{10}$/.test(phone)) {
        displayError('PhoneNo', 'Phone number should be exactly 10 digits.');
        isValid = false;
    }

    // Message Validation: Minimum 3 words
    if (message.trim().split(/\s+/).length < 3) {
        displayError('Message', 'Message should contain at least 3 words.');
        isValid = false;
    }

    if (isValid) {
        // If all validations pass, proceed with form submission
        localStorage.setItem("name", name);

        // Show the spinner and hide the form submission review
        document.querySelector('.None_Spinner').style.display = 'block';
        document.querySelector('.Form_Submit').style.display = 'none';

        fetch(this.action, {
            method: this.method,
            body: new FormData(this)
        })
        .then(response => {
            if (response.ok) {
                this.reset();
                document.getElementById("submittedName").textContent = name;
                // Hide the spinner and show the form submission review
                document.querySelector('.None_Spinner').style.display = 'none';
                document.querySelector('.Form_Submit').style.display = 'block';
            } else {
                console.error('Form submission failed:', response.status);
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    }
});

// Function to display error messages
function displayError(inputId, errorMessage) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = errorMessage;

    // Display the error message below the respective input field
    inputElement.parentElement.appendChild(errorElement);
}

// Function to clear error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => errorMessage.remove());
}
