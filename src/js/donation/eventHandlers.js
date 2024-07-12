import refs from '/js/refs';
import fetchIntentionStatus from './fetchIntentionStatus';

refs.donationFormAmountAddBtnList.addEventListener(
  'click',
  onDonationFormAmountAddBtnListClick
);
refs.donationForm.addEventListener('input', onDonationFormInput);
refs.donationForm.addEventListener('submit', onDonationFormSubmit);
refs.paymentsWidget.addEventListener('paymentStarted', onPaymentStart);

function onDonationFormSubmit(e) {
  e.preventDefault();
}

async function onPaymentStart(e) {
  const orderIdFieldName = 'order-id';
  const orderAmountFieldName = 'order-amount';

  const widgetData = e.currentTarget;
  const fetchIntentionStatusData = {};

  fetchIntentionStatusData[orderIdFieldName] = widgetData[orderIdFieldName];
  fetchIntentionStatusData[orderAmountFieldName] =
    widgetData[orderAmountFieldName];

  fetchIntentionStatus();
}

function onDonationFormInput(e) {
  const donationFormData = {};
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    donationFormData[key] = value;
  });

  const amountValue = Number(donationFormData.sum);

  const payDisabledAttributeValue = amountValue ? 'false' : 'true';
  refs.paymentsWidget.setAttribute('pay-disabled', payDisabledAttributeValue);

  const orderAmountAttributeValue = amountValue ? String(amountValue) : '1';
  refs.paymentsWidget.setAttribute('order-amount', orderAmountAttributeValue);

  const paymentDescAttributeValue = donationFormData.firstName
    ? donationFormData.firstName
    : '';
  refs.paymentsWidget.setAttribute(
    'payment-description',
    paymentDescAttributeValue
  );
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

  const payDisabledAttributeValue = amountValue ? 'false' : 'true';
  refs.paymentsWidget.setAttribute('pay-disabled', payDisabledAttributeValue);

  const orderAmountAttributeValue = amountValue ? String(amountValue) : '1';
  refs.paymentsWidget.setAttribute('order-amount', orderAmountAttributeValue);
}
