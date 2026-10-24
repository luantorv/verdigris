// SPDX-FileCopyrightText: 2026 Luis Reis Viera
// SPDX-License-Identifier: Apache-2.0

const toast = document.querySelector('.toast');
let toastTimer;

function announce(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const input = document.createElement('textarea');
    input.value = value;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.append(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
}

document.querySelectorAll('[data-copy]').forEach((swatch) => {
  swatch.addEventListener('click', async () => {
    const value = swatch.dataset.copy;
    await copyText(value);
    document.querySelector('#copy-status').textContent = `${value} copiado al portapapeles.`;
    announce(`${value} · copiado`);
  });
});

const densityToggle = document.querySelector('.density-toggle');
const componentLab = document.querySelector('#component-lab');

densityToggle?.addEventListener('click', () => {
  const compact = densityToggle.getAttribute('aria-pressed') !== 'true';
  densityToggle.setAttribute('aria-pressed', String(compact));
  componentLab.classList.toggle('is-compact', compact);
  announce(compact ? 'Densidad compacta activada' : 'Densidad normal activada');
});

document.querySelectorAll('.notice-close').forEach((button) => {
  button.addEventListener('click', () => {
    const notice = button.closest('.notice');
    notice.classList.add('is-closing');
    window.setTimeout(() => notice.remove(), 180);
    announce('Aviso cerrado');
  });
});

document.querySelector('.demo-action')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const original = button.textContent;
  button.textContent = 'Applied ✓';
  announce('Cambios aplicados');
  window.setTimeout(() => { button.textContent = original; }, 1600);
});

const sections = [...document.querySelectorAll('main section[id]')];
const navigationLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navigationLinks.forEach((link) => {
      const current = link.getAttribute('href') === `#${visible.target.id}`;
      if (current) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-25% 0px -60%', threshold: [0, .2, .5] });

  sections.forEach((section) => observer.observe(section));
}
