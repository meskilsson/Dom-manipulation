// Cache node references
const preview = document.getElementById('preview'); // preview wrapper div
const avatar = document.getElementById('avatar'); // <img> avatar
const nameEl = document.getElementById('name'); // name heading
const roleEl = document.getElementById('role'); // role paragraph
const imgUrl = document.getElementById('img-url'); // input for image URL
const imgAlt = document.getElementById('img-alt'); // input for alt text
const nameInput = document.getElementById('name-input'); // input for name
const roleInput = document.getElementById('role-input'); // input for role
const themeSel = document.getElementById('theme'); // select for theme
const btnRounded = document.getElementById('toggle-rounded'); // toggle rounded
const btnShadow = document.getElementById('toggle-shadow'); // toggle shadow
const btnHL = document.getElementById('toggle-hl'); // toggle highlight
const btnReset = document.getElementById('reset'); // reset button

// Save defaults to allow reset later
const defaults = { // object holding initial values
  src: avatar.getAttribute('src'), // initial image src
  alt: avatar.getAttribute('alt'), // initial alt text
  name: nameEl.textContent, // initial name text
  role: roleEl.textContent, // initial role text
  theme: preview.dataset.theme, // initial data-theme value
  rounded: avatar.classList.contains('rounded'), // initial rounded class presence
  shadow: avatar.classList.contains('shadow'), // initial shadow class presence
  hl: preview.classList.contains('hl') // initial highlight state
}; // end defaults

// Wire inputs to reflect state into attributes and text
imgUrl.addEventListener('input', () => { // on URL change
  avatar.setAttribute('src', imgUrl.value || defaults.src); // set src or fallback
}); // end handler

imgAlt.addEventListener('input', () => { // on alt text change
  avatar.setAttribute('alt', imgAlt.value || defaults.alt); // set alt or fallback
}); // end handler

nameInput.addEventListener('input', () => { // on name change
  nameEl.textContent = nameInput.value || defaults.name; // update name text
}); // end handler

roleInput.addEventListener('input', () => { // on role change
  roleEl.textContent = roleInput.value || defaults.role; // update role text
}); // end handler

themeSel.addEventListener('change', () => { // on theme change
  preview.dataset.theme = themeSel.value; // update data-theme via dataset
}); // end handler

// Toggle buttons for classes
btnRounded.addEventListener('click', () => { // on toggle rounded
  avatar.classList.toggle('rounded'); // add/remove rounded class
}); // end handler

btnShadow.addEventListener('click', () => { // on toggle shadow
  avatar.classList.toggle('shadow'); // add/remove shadow class
}); // end handler

btnHL.addEventListener('click', () => { // on toggle highlight
  preview.classList.toggle('hl'); // add/remove highlight on preview
}); // end handler

// Reset everything to the initial defaults
btnReset.addEventListener('click', () => { // on reset click
  avatar.setAttribute('src', defaults.src); // restore src
  avatar.setAttribute('alt', defaults.alt); // restore alt
  nameEl.textContent = defaults.name; // restore name
  roleEl.textContent = defaults.role; // restore role
  preview.dataset.theme = defaults.theme; // restore data-theme
  avatar.classList.toggle('rounded', defaults.rounded); // set rounded to default
  avatar.classList.toggle('shadow', defaults.shadow); // set shadow to default
  preview.classList.toggle('hl', defaults.hl); // set highlight to default
  imgUrl.value = ''; imgAlt.value = ''; nameInput.value = ''; roleInput.value = ''; // clear inputs
  themeSel.value = defaults.theme; // set select to default
}); // end handler
