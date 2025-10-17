// Grab references to the DOM nodes we'll manipulate
const title = document.getElementById('title'); // select the <h1> by its id
const list = document.getElementById('list'); // select the <ul> that holds the items
const statusLine = document.getElementById('status'); // select the status <p> for user feedback
const btnTitle = document.getElementById('btn-title'); // select the "Change Title" button
const btnAdd = document.getElementById('btn-add'); // select the "Add Item" button
const btnRemove = document.getElementById('btn-remove'); // select the "Remove Selected" button
const btnToggle = document.getElementById('btn-toggle'); // select the "Toggle Highlight" button
const btnClear = document.getElementById('btn-clear'); // select the "Clear All" button

// Helper to set the status line consistently
function setStatus(message) { statusLine.textContent = message; } // update status text

// Helper to get the currently selected <li> (if any)
function getSelected() { return list.querySelector('li.selected'); } // find selected node

// Clicking on a list item should make it the only selected item
list.addEventListener('click', (e) => { // listen for clicks inside the <ul>
  const li = e.target.closest('li'); // find the nearest <li> from the click target
  if (!li || !list.contains(li)) return; // ensure the click is within our list
  const prev = getSelected(); // read previously selected item
  if (prev && prev !== li) prev.classList.remove('selected'); // unselect previous
  li.classList.toggle('selected'); // toggle selected on clicked li
  btnRemove.disabled = !getSelected(); // enable/disable Remove
  setStatus(getSelected() ? `Selected: ${li.textContent}` : 'Selection cleared.'); // status
}); // end click handler

// Change Title button — prompt for a new title and apply it
btnTitle.addEventListener('click', () => { // handle Change Title
  const next = prompt('Enter a new title:', title.textContent); // ask user
  if (!next) return; // abort if cancelled/empty
  title.textContent = next; // update the heading text
  setStatus(`Title changed to: ${next}`); // notify
}); // end Change Title handler

// Add Item button — prompt for a label and append a new <li>
btnAdd.addEventListener('click', () => { // handle Add Item
  const label = prompt('Add a new item:'); // ask for text
  if (!label) return; // abort if empty
  const li = document.createElement('li'); // create <li>
  li.textContent = label; // set text
  li.dataset.id = crypto.randomUUID(); // store unique id
  list.append(li); // append to list
  setStatus(`Added: ${label}`); // status
}); // end Add Item handler

// Remove Selected button — delete the currently selected item
btnRemove.addEventListener('click', () => { // handle Remove Selected
  const sel = getSelected(); // get selected
  if (!sel) return; // nothing to remove
  const label = sel.textContent; // keep label for message
  sel.remove(); // remove from DOM
  btnRemove.disabled = true; // disable remove button
  setStatus(`Removed: ${label}`); // status
}); // end Remove handler

// Toggle Highlight button — toggle a CSS class on the selected item
btnToggle.addEventListener('click', () => { // handle Toggle Highlight
  const sel = getSelected(); // read selected item
  if (!sel) { setStatus('Nothing selected to highlight.'); return; } // guard
  const on = sel.classList.toggle('highlight'); // toggle highlight class
  setStatus(`${on ? 'Highlighted' : 'Un-highlighted'}: ${sel.textContent}`); // status
}); // end Toggle handler

// Clear All button — remove all items from the list
btnClear.addEventListener('click', () => { // handle Clear All
  if (!confirm('Remove ALL items?')) return; // confirm
  list.innerHTML = ''; // clear list
  btnRemove.disabled = true; // reflect no selection
  setStatus('Cleared all items.'); // status
}); // end Clear All handler
