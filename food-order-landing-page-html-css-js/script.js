document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-links');
  const navActions = document.querySelector('.nav-actions');
  const themeToggle = document.querySelector('.theme-toggle');

  if (themeToggle) {
    const neonEnabled = localStorage.getItem('neon-theme') === 'true';
    document.body.classList.toggle('neon-theme', neonEnabled);
    themeToggle.setAttribute('aria-pressed', String(neonEnabled));
    themeToggle.setAttribute('aria-label', neonEnabled ? 'Disable neon dark theme' : 'Enable neon dark theme');
    themeToggle.innerHTML = `<i class="fa fa-${neonEnabled ? 'sun' : 'moon'}"></i>`;

    themeToggle.addEventListener('click', () => {
      const enabled = document.body.classList.toggle('neon-theme');
      localStorage.setItem('neon-theme', String(enabled));
      themeToggle.setAttribute('aria-pressed', String(enabled));
      themeToggle.setAttribute('aria-label', enabled ? 'Disable neon dark theme' : 'Enable neon dark theme');
      themeToggle.innerHTML = `<i class="fa fa-${enabled ? 'sun' : 'moon'}"></i>`;
    });
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open');
      navActions?.classList.toggle('open');
    });
  }

  document.querySelectorAll('.faq-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach((faq) => {
        faq.classList.remove('open');
        faq.querySelector('button')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
