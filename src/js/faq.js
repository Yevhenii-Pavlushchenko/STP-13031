document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('[data-faq-item]');

  faqItems.forEach(item => {
    const trigger = item.querySelector('[data-faq-trigger]');

    trigger.addEventListener('click', () => {
      const isOpen = item.getAttribute('data-open') === 'true';

      faqItems.forEach(el => {
        el.removeAttribute('data-open');
        el.querySelector('[data-faq-trigger]').setAttribute(
          'aria-expanded',
          'false'
        );
      });

      if (!isOpen) {
        item.setAttribute('data-open', 'true');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
