// Basic interactions
const toggle = document.querySelector('.mobile-toggle');
const header = document.querySelector('.header');
if (toggle && header){
  toggle.addEventListener('click', () => {
    header.classList.toggle('mobile-open');
  });
}

// Simple form handler (no backend): validates required fields
function validateForm(formId){
  const form = document.getElementById(formId);
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const required = form.querySelectorAll('[required]');
    let ok = true;
    required.forEach(el=>{
      if(!el.value.trim()){ ok = false; el.style.borderColor = '#ef4444'; }
      else el.style.borderColor = '#d1d5db';
    });
    if(!ok){ alert('Please complete the required fields.'); return; }
    // Simulate success
    alert('Thanks! Your submission has been recorded locally for demo.');
    form.reset();
  });
}
