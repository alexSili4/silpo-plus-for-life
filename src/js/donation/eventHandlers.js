import fetchPayWidget from './fetchPayWidget';
import refs from '/js/refs';

const isHiddenClassName = 'is-hidden';

refs.donationFormAmountAddBtnList.addEventListener(
  'click',
  onDonationFormAmountAddBtnListClick
);
refs.donationForm.addEventListener('submit', onDonationFormSubmit);
refs.donationForm.addEventListener('input', onDonationFormInput);
refs.donationModalWinCloseBtn.addEventListener(
  'click',
  onDonationModalWinCloseBtnClick
);
refs.donationModalWinBackdrop.addEventListener(
  'click',
  onDonationModalWinBackdropClick
);

function onDonationModalWinBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }

  e.currentTarget.parentNode.classList.add(isHiddenClassName);
  window.removeEventListener('keydown', hideDonationModalWin);
}

function onDonationModalWinCloseBtnClick(e) {
  const targetModalWin = e.target.closest('.js-donation-modal-win');
  targetModalWin.classList.add(isHiddenClassName);
  window.removeEventListener('keydown', hideDonationModalWin);
}

function hideDonationModalWin(e) {
  if (e.code === 'Escape') {
    const targetDonationModalWin = document.querySelector(
      '.js-goods-modal-win'
    );

    targetDonationModalWin.classList.add(isHiddenClassName);
    window.removeEventListener('keydown', hideDonationModalWin);
  }
}

function onDonationFormInput(e) {
  const donationFormData = {};

  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    donationFormData[key] = value;
  });

  refs.donationFormSubmitBtn.disabled = !Number(donationFormData.amount);
}

function onDonationFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
}

function onDonationFormAmountAddBtnListClick(e) {
  const targetBtn = e.target.closest('.js-donation-form-amount-add-btn');
  targetBtn.blur();

  const { amount } = targetBtn.dataset;
  const { value: donationFormInputAmountValue } = refs.donationFormInputAmount;
  const updatedAmountValue =
    Number(donationFormInputAmountValue) + Number(amount);

  refs.donationFormInputAmount.value = updatedAmountValue;

  const amountValue = Number(refs.donationFormInputAmount.value);
  if (amountValue) {
    refs.donationFormSubmitBtn.disabled = false;
  }
}
