// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Form submission — mailto
function submitForm(e) {
  e.preventDefault();

  const fname       = document.getElementById('fname').value;
  const lname       = document.getElementById('lname').value;
  const phone       = document.getElementById('phone').value;
  const email       = document.getElementById('email').value;
  const country     = document.getElementById('country').value;
  const consultType = document.getElementById('consult-type').value;
  const concern     = document.getElementById('concern').value;
  const message     = document.getElementById('message').value;
  const time        = document.getElementById('preferred-time').value;

  const subject = encodeURIComponent('New Appointment Request — LifeKraft Clinic');
  const body = encodeURIComponent(
`New Appointment Request from LifeKraft Website
================================================

Name              : ${fname} ${lname}
Phone / WhatsApp  : ${phone}
Email             : ${email || 'Not provided'}
Location          : ${country}
Consultation Type : ${consultType}
Main Concern      : ${concern}
Preferred Time    : ${time || 'Not specified'}

Patient Message:
${message || 'None'}

================================================
Sent from www.lifekraft.co.in`
  );

  window.location.href = `mailto:saigokhale.sd@gmail.com?subject=${subject}&body=${body}`;

  document.getElementById('form-success').style.display = 'block';
  document.getElementById('apptForm').reset();
  document.getElementById('form-success').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
