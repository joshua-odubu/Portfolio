document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form submit

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent("New message from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

    const mailtoLink = `mailto:contact@joshuaodubu.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  });