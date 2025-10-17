// Cache nodes
const form = document.getElementById('form'); // the <form> element
const nameEl = document.getElementById('name'); // name input
const emailEl = document.getElementById('email'); // email input
const pwdEl = document.getElementById('pwd'); // password input
const pwd2El = document.getElementById('pwd2'); // confirm password input
const termsEl = document.getElementById('terms'); // terms checkbox
const result = document.getElementById('result'); // result message paragraph

// Helper to show message near a field
function setMsg(id, text, ok){ // id is field id, text is message, ok boolean for style
  const box = document.getElementById('msg-' + id); // locate the message container
  box.textContent = text; // set the message text
  box.className = 'msg ' + (text ? (ok ? 'success' : 'error') : ''); // style class
} // end setMsg

// Validate a single field and return boolean
function validateField(el){ // accepts an input element to validate
  if(el === pwd2El){ // special case: confirm password
    const match = pwd2El.value === pwdEl.value; // compare both passwords
    setMsg('pwd2', match ? '' : 'Passwords must match', match); // show message if needed
    return match; // return result
  } // end special case
  if(el.validity.valid){ // if built-in constraints pass
    setMsg(el.id, '', true); // clear message
    return true; // valid
  } else { // if invalid
    let msg = 'Invalid value.'; // default
    if(el.validity.valueMissing) msg = 'This field is required.'; // required message
    if(el.validity.typeMismatch) msg = 'Please enter a valid value.'; // email mismatch, etc.
    if(el.validity.tooShort) msg = `Must be at least ${el.minLength} characters.`; // length
    setMsg(el.id, msg, false); // show error message
    return false; // invalid
  } // end else
} // end validateField

// Validate form and enable/disable submit
function validateForm(){ // check all fields together
  const ok = [
    validateField(nameEl), // validate name
    validateField(emailEl), // validate email
    validateField(pwdEl), // validate password
    validateField(pwd2El), // validate confirm
    termsEl.checked // ensure terms accepted
  ].every(Boolean); // true only if all are truthy
  document.getElementById('submit').disabled = !ok; // toggle submit button
  return ok; // return overall validity
} // end validateForm

// Hook up events for live validation
[nameEl, emailEl, pwdEl, pwd2El].forEach(el => { // iterate fields
  el.addEventListener('input', () => validateForm()); // validate on input
  el.addEventListener('blur', () => validateField(el)); // show message on blur
}); // end forEach
termsEl.addEventListener('change', () => validateForm()); // validate when terms toggled

// Submit handler
form.addEventListener('submit', (e) => { // on form submit
  e.preventDefault(); // stop navigation
  if(!validateForm()) return; // guard: must be valid
  const data = Object.fromEntries(new FormData(form)); // collect values
  result.textContent = `Success! Welcome, ${data.name}.`; // show success message
  result.className = 'notice success'; // success styling
  form.reset(); // clear form values
  validateForm(); // update button disabled state
}); // end submit

// Reset handler
document.getElementById('reset').addEventListener('click', () => { // on reset button click
  form.reset(); // clear fields
  ['name','email','pwd','pwd2'].forEach(id => setMsg(id, '', true)); // clear messages
  result.textContent = ''; result.className = 'notice'; // clear result
  validateForm(); // update button state
}); // end reset
