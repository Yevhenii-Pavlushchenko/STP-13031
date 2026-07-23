document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('glr-scroll-container');
  const btnPrev = document.querySelector('.glr_btn--prev');
  const btnNext = document.querySelector('.glr_btn--next');

  if (!container || !btnPrev || !btnNext) return;

  // Функция для получения шага прокрутки (ширина карточки + gap)
  const getScrollStep = () => {
    const card = container.querySelector('.glr_card');
    if (!card) return 302; // значение по умолчанию (270 + 32)

    // Получаем реальный gap из вычисленных стилей
    const computedGap =
      parseFloat(
        window.getComputedStyle(container.querySelector('.glr_cards-list')).gap
      ) || 32;
    return card.offsetWidth + computedGap;
  };

  // Клик вперед
  btnNext.addEventListener('click', () => {
    container.scrollLeft += getScrollStep();
  });

  // Клик назад
  btnPrev.addEventListener('click', () => {
    container.scrollLeft -= getScrollStep();
  });
});
