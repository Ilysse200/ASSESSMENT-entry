// function changeText() {
//     document.getElementById("hoverButton").innerText = "Nice to meet you!";
//   }
  
//   function resetText() {
//     document.getElementById("hoverButton").innerText = "Hover Over Me";
//   }
  
  
// This is the function that holds validation rules
function validateForm() {
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    let valid = true;
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("successMessage");
  
    nameError.innerText = "";
    emailError.innerText = "";
    successMessage.style.display = "none";
  
    if (name === "") {
      nameError.innerText = "Name is required.";
      valid = false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.innerText = "Invalid email format.";
      valid = false;
    }
  
    if (valid) {
      successMessage.style.display = "block";
    }
  
    return false; // prevent form from submitting for demo purposes
  }
  
  
  //This function handles the greetings display when a button is clicked
  function toggleGreeting() {
    const messageDiv = document.getElementById("greetingMessage");
  
    if (messageDiv.style.display === "none" || messageDiv.style.display === "") {
      messageDiv.innerText = "👋 Hello, Wanda Guela RUZINDANA!";
      messageDiv.style.display = "block";
    } else {
      messageDiv.style.display = "none";
    }
  }
  
  