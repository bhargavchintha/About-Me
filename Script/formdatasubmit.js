document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("Name").value;
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
});