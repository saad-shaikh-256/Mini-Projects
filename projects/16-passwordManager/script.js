let websiteInput = document.querySelector("#website-Input");
let emailInput = document.querySelector("#email-Username");
let passwordInput = document.querySelector("#password-Input");
let savePassword = document.querySelector("#save-Password");
let errorMessage = document.querySelector("#error-Container");

// Hide error message by default
errorMessage.classList.add("hidden");
errorMessage.classList.remove("bg-red-50", "text-red-500", "border-red-100");

// Simple reversible encoding (Base64)
function encodePassword(password) {
  return btoa(password);
}

savePassword.addEventListener("submit", async (e) => {
  e.preventDefault();
  const websiteValue = websiteInput.value.trim().toLowerCase();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!websiteValue || !emailValue || !passwordValue) {
    errorMessage.textContent = "All fields are required!";
    errorMessage.classList.remove("hidden");
    errorMessage.classList.add("bg-red-50", "text-red-500", "border-red-100");

    setTimeout(() => {
      errorMessage.classList.add("hidden");
    }, 4000);
    return;
  }

  // Retrieve existing data from localStorage
  let storedData = JSON.parse(localStorage.getItem("passwordManager")) || [];

  // Check if same website already has the same email
  const duplicateExists = storedData.some(
    (entry) => entry.website === websiteValue && entry.email === emailValue
  );

  if (duplicateExists) {
    errorMessage.textContent = "Duplicate email for same website!";
    errorMessage.classList.remove("hidden");
    errorMessage.classList.remove(
      "bg-green-50",
      "text-green-500",
      "border-green-200"
    );
    errorMessage.classList.add("bg-red-50", "text-red-500", "border-red-100");

    setTimeout(() => {
      errorMessage.classList.add("hidden");
      errorMessage.classList.remove(
        "bg-red-50",
        "text-red-500",
        "border-red-100"
      );
    }, 4000);
    return;
  }
  // Encode the password (Base64)
  const encodedPassword = encodePassword(passwordValue);

  // Create new entry
  const newEntry = {
    website: websiteValue,
    email: emailValue,
    password: encodedPassword,
  };

  // Add to array
  storedData.push(newEntry);

  // Save back to localStorage
  localStorage.setItem("passwordManager", JSON.stringify(storedData));

  // Show success message
  errorMessage.textContent = "Password saved!";
  errorMessage.classList.remove("hidden");
  errorMessage.classList.add(
    "bg-green-50",
    "text-green-500",
    "border-green-200"
  );

  // Auto-hide after 2s
  setTimeout(() => {
    errorMessage.classList.add("hidden");
  }, 3000);

  // Clear form fields
  websiteInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
