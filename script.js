document.addEventListener("DOMContentLoaded", function() {
    const validateButton = document.getElementById("validate-button");
    const resultElement = document.getElementById("result");
  
    validateButton.addEventListener("click", function() {
      const expressionType = document.getElementById("expression-type").value;
      const inputValue = document.getElementById("input-field").value;
      let regex;
  
      switch(expressionType) {
        case "email":
          regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          break;
        case "phone":
          regex = /^\d{11}$/;
          break;
        case "postcode":
          regex = /^\d{4}$/;
          break;
        case "username":
          regex = /^[a-zA-Z0-9_-]{3,16}$/;
          break;
        case "password":
          regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
          break;
        default:
          break;
      }
  
      if (regex.test(inputValue)) {
        resultElement.textContent = "Valid expression!";
        resultElement.style.color = "green";
      } else {
        resultElement.textContent = "Invalid expression!";
        resultElement.style.color = "red";
      }
    });
  });
  