import refs from '/js/refs';
import validateValue from '/js/validateValue';

refs.donationFormInputAmount.addEventListener(
  'input',
  onDonationFormInputAmountInput
);

function onDonationFormInputAmountInput(e) {
  const regex = /^[0-9]+$/;

  const isValidValue = validateValue({ e, regex });

  if (!isValidValue) {
    return;
  }
}
