// Intentionally minimal: this site works without JavaScript.
// Automatically mark the current local page in the navigation.
for (const a of document.querySelectorAll('.nav a')) {
  const current = location.pathname.split('/').pop() || 'index.html';
  const link = a.getAttribute('href');
  if (link === current) { a.classList.add('active'); a.setAttribute('aria-current', 'page'); }
}
