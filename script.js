
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effects to navigation buttons
  const navButtons = document.querySelectorAll('nav a');

  navButtons.forEach(button => {
      button.addEventListener('mouseenter', function () {
          this.style.backgroundColor = 'white';
          this.style.color = '#333'; 
          this.style.padding = '12px 20px'; 
          this.style.border = '2px solid #333'; 
          this.style.borderRadius = '8px'; 
      });

      button.addEventListener('mouseleave', function () {
          this.style.backgroundColor = 'transparent';
          this.style.color = 'white'; 
          this.style.padding = '10px 15px'; 
          this.style.border = 'none'; 
      });
  });
});

// Send email
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform your validation
    var isValid = validateForm();

    if (isValid) {
        // Create a mailto link with form data
        var subject = "Contact Form Submission";
        var mailtoLink = "mailto:someone@example.com?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

        // Open the user's email client
        window.location.href = mailtoLink;
    }

    return false; 
}

// Validate the form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    var isValid = true;

    // Validate name
    if (name.trim() === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Invalid email address";
        isValid = false;
    }

    // Validate message
    if (message.trim() === "") {
        messageError.innerHTML = "Message is required";
        isValid = false;
    }

    return isValid;
}
