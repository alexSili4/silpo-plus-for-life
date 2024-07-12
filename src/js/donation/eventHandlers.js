import refs from '/js/refs';
import fetchIntentionStatus from './fetchIntentionStatus';

refs.donationFormAmountAddBtnList.addEventListener(
  'click',
  onDonationFormAmountAddBtnListClick
);
refs.donationForm.addEventListener('input', onDonationFormInput);
refs.paymentsWidget.addEventListener('paymentStarted', onPaymentStart);

async function onPaymentStart(e) {
  const orderIdFieldName = 'order-id';
  const orderAmountFieldName = 'order-amount';

  const widgetData = e.currentTarget;
  const fetchIntentionStatusData = {};

  fetchIntentionStatusData[orderIdFieldName] = widgetData[orderIdFieldName];
  fetchIntentionStatusData[orderAmountFieldName] =
    widgetData[orderAmountFieldName];

  fetchIntentionStatus();
  //for test
  console.log(e);
}

function onDonationFormInput(e) {
  const donationFormData = {};
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    donationFormData[key] = value;
  });
  const amountValue = Number(donationFormData.amount);
  refs.paymentsWidget['pay-disabled'] = amountValue ? 'true' : 'false';
  refs.paymentsWidget['order-amount'] = amountValue ? String(amountValue) : '1';
  refs.paymentsWidget['payment-description'] = donationFormData.name
    ? donationFormData.name
    : '';
  //for test
  console.dir(refs.paymentsWidget);
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
  refs.paymentsWidget['pay-disabled'] = amountValue ? 'true' : 'false';
  refs.paymentsWidget['order-amount'] = amountValue ? String(amountValue) : '1';
}
