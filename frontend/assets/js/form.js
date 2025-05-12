let startTime = null;

const form = document.getElementById("contactForm");
const confirmationMsg = document.getElementById("confirmationMsg");
const timeTaken = document.getElementById("timeTaken");

form.addEventListener("focusin", () => {
  if (!startTime) {
    startTime = new Date();
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const endTime = new Date();
  const timeSpent = Math.floor((endTime - startTime) / 1000); // in seconds

  confirmationMsg.textContent = "Form submitted successfully!";
  confirmationMsg.style.display = "block";

  timeTaken.textContent = `Time taken to fill the form: ${timeSpent} seconds`;

  form.reset();
  startTime = null;
});
