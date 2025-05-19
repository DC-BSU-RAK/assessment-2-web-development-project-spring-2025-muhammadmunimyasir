document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && subject && message) {
    document.getElementById('form-response').innerHTML = `
      <p style="color: #00ffcc;">Thank you, ${name}! Your message has been received.</p>
    `;
    this.reset();
  } else {
    document.getElementById('form-response').innerHTML = `
      <p style="color: #ff4d4d;">Please fill out all fields before submitting.</p>
    `;
  }
});
