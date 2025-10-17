// Grab references to DOM nodes we'll use throughout
const form = document.querySelector('#todo-form'); // select the <form> element by id
const input = document.querySelector('#todo-input'); // select the input for entering todo title
const list = document.querySelector('#todo-list'); // select the <ul> that will contain <li> items
const counts = document.querySelector('#counts'); // select the div that shows counts

// Keep an in-memory array of todo objects to be the single source of truth
let todos = []; // start with an empty array of todos

// Try to load any previously-saved todos from localStorage (bonus requirement)
const saved = localStorage.getItem('todos'); // read the key 'todos' from localStorage
if (saved) { // if something was saved previously
  todos = JSON.parse(saved); // parse the JSON string back into an array
  render(); // render the list to match the loaded state
}

// Listen for the form's submit event to add a new todo
form.addEventListener('submit', (e) => { // attach an event listener to the form submit
  e.preventDefault(); // prevent the page from reloading (default form submission)
  const title = input.value.trim(); // get the input's value and trim whitespace
  if (!title) return; // if the input is empty after trimming, do nothing

  const todo = { // create a new todo object
    id: crypto.randomUUID(), // generate a unique id for delegation and updates
    title, // store the title string
    done: false // start as not completed
  }; // end of object literal

  todos.push(todo); // add the new todo to our array
  input.value = ''; // clear the input for the next entry
  render(); // update the DOM to reflect the new state
}); // end of submit handler

// Use **event delegation** on the <ul> to handle clicks for delete and toggle
list.addEventListener('click', (e) => { // listen for any click within the <ul>
  const deleteBtn = e.target.closest('button.delete'); // find the nearest delete button from the click target
  if (deleteBtn) { // if a delete button was clicked (or inside of it)
    const id = deleteBtn.closest('li').dataset.id; // read the li's data-id to identify which todo to remove
    todos = todos.filter(t => t.id !== id); // remove the matching todo from the array
    render(); // update the DOM after deletion
    return; // stop here so we don't also handle as a toggle
  } // end delete branch

  if (e.target.matches('input[type="checkbox"]')) { // if the click was on a checkbox
    const id = e.target.closest('li').dataset.id; // read the li's data-id
    const t = todos.find(t => t.id === id); // find the todo object by id
    t.done = e.target.checked; // set done to whether the checkbox is checked
    render(); // re-render to apply the new class and counts
  } // end toggle branch
}); // end click listener

// Render function: rebuild the <ul> based on the "todos" array
function render() { // define a function named render
  list.innerHTML = ''; // clear the existing list content to avoid duplicates
  const frag = document.createDocumentFragment(); // create a DocumentFragment to minimize reflows

  for (const t of todos) { // loop each todo object
    const li = document.createElement('li'); // create a new <li> element
    li.dataset.id = t.id; // store the id on the element for delegation lookups

    const checkbox = document.createElement('input'); // create an <input> element
    checkbox.type = 'checkbox'; // set the input type to checkbox
    checkbox.checked = t.done; // reflect the done state in the checkbox

    const span = document.createElement('span'); // create a <span> for the title text
    span.textContent = t.title; // set the text content to the todo title
    if (t.done) span.classList.add('completed'); // add a class to style completed items

    const del = document.createElement('button'); // create the delete button element
    del.textContent = 'Delete'; // label the button
    del.className = 'delete'; // add a class so our delegation can detect it
    del.setAttribute('aria-label', `Delete ${t.title}`); // improve accessibility with an ARIA label

    li.append(checkbox, span, del); // append the checkbox, text span, and delete button to the li
    frag.append(li); // add the li to the fragment
  } // end loop

  list.append(frag); // append the fragment to the <ul> in one operation

  const total = todos.length; // count total items
  const done = todos.filter(t => t.done).length; // count completed items
  const left = total - done; // compute remaining items
  counts.textContent = `${total} total • ${done} done • ${left} left`; // show counts in the UI

  localStorage.setItem('todos', JSON.stringify(todos)); // persist the latest state to localStorage
} // end render
