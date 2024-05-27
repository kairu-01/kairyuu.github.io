document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
      }
  
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Form is valid, display submitted data
      alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
      // Clear form fields
      form.reset();
    });
  });
  
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  