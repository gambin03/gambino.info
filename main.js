function toggleReadMore(button) {
    const readMoreText = button.previousElementSibling;
    if (readMoreText.style.display === "block") {
        readMoreText.style.display = "none";
        button.textContent = "Read More";
    } else {
        readMoreText.style.display = "block";
        button.textContent = "Read Less";
    }
}
//contact form and validation
function validateForm() {
    let isValid = true;

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Validate Name
    if (name === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email.";
      isValid = false;
    }

    // Validate Message
    if (message === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
    }

    // If valid, log the form data (replace this with actual submission logic)
    if (isValid) {
      let userName;
      userName=document.getElementById("name").value
      console.log("Form submitted successfully!");
      console.log({ name, email, message });
      alert(userName+"  Our Team has received your meassage Thank you!");
      document.getElementById("contactForm").reset(); // Reset form
    }
  }
  const titles = [
    " Front-End Developer",
    " Consultant",
    " Back-End Developer",
    " Full-Stack Engineer"
  ];

  let currentTitleIndex = 0;
  let currentCharIndex = 0;
  let isTyping = true;

  const typedTitleElement = document.getElementById('typed-title');

  function typeEffect() {
    const currentTitle = titles[currentTitleIndex];

    if (isTyping) {
      // Add one character at a time
      typedTitleElement.textContent += currentTitle.charAt(currentCharIndex);
      currentCharIndex++;

      // If the whole word is typed, stop typing
      if (currentCharIndex === currentTitle.length) {
        isTyping = false;
        setTimeout(() => {
          // Wait before deleting the word
          currentCharIndex = 0;
          isTyping = true;
          currentTitleIndex = (currentTitleIndex + 1) % titles.length;
          typedTitleElement.textContent = '';
        }, 1500); // Pause before deleting
      }
    }
    
    // Loop the typing effect
    setTimeout(typeEffect, 100);
  }

  // Start the typing effect
  typeEffect();

  document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        section.classList.add('visible');
      }
    });

  });
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
