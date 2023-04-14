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
});
