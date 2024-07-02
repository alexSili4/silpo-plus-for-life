import refs from './refs';

refs.donationFormAmountAddBtnList.addEventListener(
  'click',
  onDonationFormAmountAddBtnListClick
);
refs.donationForm.addEventListener('submit', onDonationFormSubmit);
refs.donationForm.addEventListener('input', onDonationFormInput);

function onDonationFormInput(e) {
  const donationFormData = {};

  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    donationFormData[key] = value;
  });

  const values = Object.values(donationFormData);
  const isEmptyField = values.some((value) => !value || value === '0');

  refs.donationFormSubmitBtn.disabled = isEmptyField ? true : false;
}

function onDonationFormSubmit(e) {
  e.preventDefault();

  const donationFormData = {};

  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    donationFormData[key] = value;
  });

  console.log(donationFormData);
}

function onDonationFormAmountAddBtnListClick(e) {
  const targetBtn = e.target.closest('.js-donation-form-amount-add-btn');
  targetBtn.blur();

  const { amount } = targetBtn.dataset;
  const { value: donationFormInputAmountValue } = refs.donationFormInputAmount;
  const updatedAmountValue =
    Number(donationFormInputAmountValue) + Number(amount);

  refs.donationFormInputAmount.value = updatedAmountValue;
}
