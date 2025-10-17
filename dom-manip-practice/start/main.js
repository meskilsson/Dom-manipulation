// Select nodes we'll manipulate
const title = document.getElementById('title'); // select the H2 title
const chips = document.getElementById('chips'); // select the container for chips
const statusLine = document.getElementById('status'); // status message area
const btnRename = document.getElementById('btn-rename'); // rename button
const btnAdd = document.getElementById('btn-add'); // add chip button
const btnClear = document.getElementById('btn-clear'); // clear chips button

// Helper to update status messages
function setStatus(msg){ statusLine.textContent = msg; } // update status textContent

// Rename title
btnRename.addEventListener('click', () => { // listen for click on rename
  const next = prompt('New title:', title.textContent); // prompt for new text
  if(!next) return; // abort if no input
  title.textContent = next; // update text
  setStatus(`Title renamed to: ${next}`); // tell the user
}); // end rename

// Add a chip
btnAdd.addEventListener('click', () => { // on add click
  const label = prompt('Chip text:'); // ask for label
  if(!label) return; // abort if empty
  const span = document.createElement('span'); // create a span
  span.textContent = label; // set text content
  span.className = 'highlight'; // style a bit
  span.style.padding = '.25rem .5rem'; // inline padding
  span.style.borderRadius = '.5rem'; // rounded corners
  span.style.border = '1px solid #e5e7eb'; // subtle border
  chips.append(span); // append to chips container
  setStatus(`Added chip: ${label}`); // notify
}); // end add

// Clear chips
btnClear.addEventListener('click', () => { // on clear click
  chips.innerHTML = ''; // remove all chip elements
  setStatus('Cleared all chips.'); // notify
}); // end clear
