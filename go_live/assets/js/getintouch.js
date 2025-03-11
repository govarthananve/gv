document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation flags
  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  } else if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters long";
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  } else if (message.length < 10) {
    document.getElementById("messageError").textContent =
      "Message must be at least 10 characters long";
    isValid = false;
  }

  if (isValid) {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("access_key", "9199a52c-ca72-46f7-b6e2-781aa264112b");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        document.getElementById("successMessage").textContent =
          "Thank you for your message. I will get back to you soon!";
        document.getElementById("contactForm").reset();
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      document.getElementById("successMessage").textContent =
        "Sorry, there was an error sending your message. Please try again later.";
      console.error("Error:", error);
    }
  }
});
