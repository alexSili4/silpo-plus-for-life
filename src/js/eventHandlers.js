import refs from './refs';

const isHiddenClassName = 'is-hidden';

refs.questionsList.addEventListener('click', toggleShowAnswer);
refs.mobileMenuToggleBtn.forEach((el) => {
  el.addEventListener('click', toggleMobileMenu);
});
refs.mobileMenuList.addEventListener('click', onMobileMenuLinkClick);
refs.goodsLists.forEach((list) => {
  list.addEventListener('click', onGoodBtnClick);
});
refs.goodsModalWinCloseBtn.forEach((btn) => {
  btn.addEventListener('click', onGoodsModalWinCloseBtnClick);
});
refs.goodsModalWinBackdrop.forEach((backdrop) => {
  backdrop.addEventListener('click', onGoodsModalWinBackdropClick);
});
refs.goodsModalWinSectionsList.forEach((section) => {
  section.addEventListener('click', onGoodsModalWinSectionsListInput);
});

function onGoodsModalWinSectionsListInput(e) {
  const isInput = e.target.nodeName === 'INPUT';

  if (!isInput) {
    return;
  }

  const { value: targetClassName } = e.target;

  const goodsModalWinTargetSection = e.currentTarget.parentNode.querySelector(
    '.js-goods-modal-win-target-section'
  );

  goodsModalWinTargetSection.classList.remove(
    'js-characteristics',
    'js-documents'
  );
  goodsModalWinTargetSection.classList.add(`js-${targetClassName}`);
}

function onGoodsModalWinBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }

  e.currentTarget.parentNode.classList.add(isHiddenClassName);
  window.removeEventListener('keydown', hideGoodsModalWin);
}

function onGoodsModalWinCloseBtnClick(e) {
  const targetModalWin = e.target.closest('.js-goods-modal-win');
  targetModalWin.classList.add(isHiddenClassName);
  window.removeEventListener('keydown', hideGoodsModalWin);
}

function onGoodBtnClick(e) {
  const targetBtn = e.target.closest('.js-goods-btn');

  if (!targetBtn) {
    return;
  }

  targetBtn.blur();
  const { good } = targetBtn.dataset;
  const targetGoodsModalWin = document.querySelector(
    `.js-goods-modal-win.js-${good}`
  );

  targetGoodsModalWin.classList.remove(isHiddenClassName);

  const isHidden = targetGoodsModalWin.classList.contains(isHiddenClassName);

  if (isHidden) {
    window.removeEventListener('keydown', hideGoodsModalWin);
  } else {
    window.addEventListener('keydown', hideGoodsModalWin);
  }
}

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

function hideGoodsModalWin(e) {
  if (e.code === 'Escape') {
    const targetGoodsModalWin = document.querySelector(
      `.js-goods-modal-win:not(.${isHiddenClassName})`
    );

    targetGoodsModalWin.classList.add(isHiddenClassName);
    window.removeEventListener('keydown', hideGoodsModalWin);
  }
}
