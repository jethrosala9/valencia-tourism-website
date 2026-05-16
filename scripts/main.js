const navToggle = document.querySelector('[data-nav-toggle]');
const navList = document.querySelector('[data-nav-list]');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const developerPanels = document.querySelectorAll('[data-dev-panel]');

developerPanels.forEach((panel) => {
  const trigger = panel.querySelector('.developer-trigger');
  if (!trigger) return;

  trigger.addEventListener('click', () => {
    developerPanels.forEach((item) => {
      const button = item.querySelector('.developer-trigger');
      const isCurrent = item === panel;
      item.classList.toggle('is-active', isCurrent);
      if (button) button.setAttribute('aria-expanded', String(isCurrent));
    });
  });
});
