document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.querySelector(".footer__email");
  const emailAddress = "info@saltandlighttherapy.net";
  const subject = "Hello There";
  const body = "Dear Vanessa,";

  emailLink.setAttribute(
    "href",
    `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  );

  emailLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.open(emailLink.getAttribute("href"), "_blank");
  });

  // Add an event listener for form submission
  const form = document.querySelector(".form");
  // const textArea = document.querySelector("#largeTextBox");

  form.addEventListener("submit", submitForm);
});

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const email = document.getElementById("your-email").value;
  const message = document.getElementById("largeTextBox").value;

  const mailtoLink = `mailto:info@saltandlighttherapy.net?subject=Form Submission&body=Name: ${encodeURIComponent(
    name
  )}%0D%0AEmail: ${encodeURIComponent(
    email
  )}%0D%0APhone Number: ${encodeURIComponent(
    phoneNumber
  )}%0D%0AMessage: ${encodeURIComponent(message)}`;

  window.open(mailtoLink, "_blank");
}
