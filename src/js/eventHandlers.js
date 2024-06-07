import refs from './refs';

const isHiddenClassName = 'is-hidden';

// refs.seasonsList.addEventListener('click', onSeasonsListInput);
// refs.heroJoinUsBtn.addEventListener('click', toggleModalWinState);
// refs.closeModalWinBtn.addEventListener('click', toggleModalWinState);
// refs.vacanciesList.addEventListener('click', toggleShowMoreVacancyDetails);
// refs.vacanciesList.addEventListener('click', onJoinUsBtnClick);
refs.questionsList.addEventListener('click', toggleShowAnswer);
// refs.supportBnt.addEventListener('click', toggleSupportMenuState);
// refs.consultationBtn.forEach((el) => {
//   el.addEventListener('click', toggleModalWinState);
// });
// refs.showMoreBtn.forEach((el) => {
//   el.addEventListener('click', toggleShowMoreText);
// });
refs.mobileMenuToggleBtn.forEach((el) => {
  el.addEventListener('click', toggleMobileMenu);
});
refs.mobileMenuList.addEventListener('click', onMobileMenuLinkClick);

// function toggleSupportMenuState(e) {
//   e.currentTarget.blur();
//   refs.supportMenu.classList.toggle('is-hidden-menu');
// }

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

// function toggleShowMoreText(e) {
//   const targetClassName = 'hidden-desc';
//   const hiddenTextElement = e.currentTarget.closest('.js-hidden-desc');
//   hiddenTextElement.classList.toggle(targetClassName);
// }

// function toggleModalWinState(e) {
//   e.currentTarget.blur();
//   refs.joinUsModalWin.classList.toggle(isHiddenClassName);
// }

// function toggleShowMoreVacancyDetails(e) {
//   const isTargetToggleShowMoreBtn =
//     e.target.classList.contains('js-toggle-show-more-vacancy-details') ||
//     e.target.closest('.js-toggle-show-more-vacancy-details');

//   if (!isTargetToggleShowMoreBtn) {
//     return;
//   }

//   const vacancyDetails = e.target
//     .closest('.js-vacancy-card')
//     .querySelector('.js-vacancy-card-details');
//   vacancyDetails.classList.toggle(isHiddenClassName);
// }

// function onJoinUsBtnClick(e) {
//   e.currentTarget.blur();
//   const isTargetJoinUsBtn = e.target.closest('.js-join-us-btn');

//   if (!isTargetJoinUsBtn) {
//     return;
//   }

//   refs.joinUsModalWin.classList.toggle(isHiddenClassName);
// }

function toggleShowAnswer(e) {
  const targetClassName = 'hidden-desc';
  const isTargetQuestionBtn = e.target.closest('.js-questions-question-btn');

  if (!isTargetQuestionBtn) {
    return;
  }

  const questionContainer = e.target.closest('.js-questions-question-wrap');
  questionContainer.classList.toggle(targetClassName);
}
