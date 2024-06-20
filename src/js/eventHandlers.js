import refs from './refs';

const isHiddenClassName = 'is-hidden';

refs.questionsList.addEventListener('click', toggleShowAnswer);
refs.mobileMenuToggleBtn.forEach((el) => {
  el.addEventListener('click', toggleMobileMenu);
});
refs.mobileMenuList.addEventListener('click', onMobileMenuLinkClick);

function onMobileMenuLinkClick(e) {
  const isTargetQuestionBtn = e.target.closest(
    '.js-mobile-menu-links-list-link'
  );

  if (!isTargetQuestionBtn) {
    return;
  }

  refs.mobileMenu.classList.toggle(isHiddenClassName);
}

function toggleMobileMenu() {
  refs.mobileMenu.classList.toggle(isHiddenClassName);
}

function toggleShowAnswer(e) {
  const targetClassName = 'hidden-desc';
  const isTargetQuestionBtn = e.target.closest('.js-questions-question-btn');

  if (!isTargetQuestionBtn) {
    return;
  }

  const questionContainer = e.target.closest('.js-questions-question-wrap');
  questionContainer.classList.toggle(targetClassName);
}
