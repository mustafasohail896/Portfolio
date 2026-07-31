// Close mobile nav after clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.navbar-collapse');
    if (nav && nav.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});

// Highlight active nav link while scrolling
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// Contact form: no backend, so this opens the visitor's email client
// pre-filled with what they typed. Swap this out for Formspree (or similar)
// later if a real backend/service is available.
function handleSubmit(){
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  const note = document.getElementById('sendNote');

  if(!name || !email || !message){
    note.textContent = '⚠ Please fill in your name, email, and message first.';
    note.style.color = '#C1443C';
    note.style.display = 'inline';
    return;
  }

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:mustafasohail896@gmail.com?subject=${subject}&body=${body}`;

  note.textContent = '✓ Opening your email app to send this...';
  note.style.color = '#2E6F5E';
  note.style.display = 'inline';
  setTimeout(() => { note.style.display = 'none'; }, 4000);
}
