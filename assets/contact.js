// Ensure the listener is attached only after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (!contactForm) {
    console.warn('[contact.js] #contactForm not found. Make sure the form has id="contactForm" and this script is loaded on the same page (with <script defer> or at the end of <body>).');
    return;
  }

  // Attach once
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Use the form element explicitly to avoid target issues
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    console.log('[contact.js] submit data:', data);

    // TODO: send to your backend with fetch if desired
    // fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  }, { once: false });
});