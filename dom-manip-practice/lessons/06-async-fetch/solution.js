// Cache DOM nodes
const filter = document.getElementById('filter'); // filter input
const state = document.getElementById('state'); // state message
const list = document.getElementById('list'); // cards container

// Local state for loaded users
let users = []; // empty array initially

// Render helper to display cards with current filter
function render(){ // render cards according to filter value
  const q = filter.value.toLowerCase(); // lowercase query
  list.innerHTML = ''; // clear previous
  const frag = document.createDocumentFragment(); // batch DOM updates
  users
    .filter(u => `${u.name} ${u.company}`.toLowerCase().includes(q)) // filter by name or company
    .forEach(u => { // for each user
      const card = document.createElement('div'); // create card container
      card.className = 'card'; // apply card style
      const h2 = document.createElement('h2'); // create title element
      h2.textContent = u.name; // set user name
      const p1 = document.createElement('p'); // create email paragraph
      p1.textContent = u.email; // set email text
      const p2 = document.createElement('p'); // create company paragraph
      p2.textContent = u.company; // set company text
      card.append(h2, p1, p2); // add elements to card
      frag.append(card); // add card to fragment
    }); // end forEach
  list.append(frag); // append fragment to list
} // end render

// Load users with fetch and handle states
async function load(){ // asynchronous loader
  state.textContent = 'Loading…'; // show loading
  list.innerHTML = '<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>'; // simple skeletons
  try { // try block for network
    const res = await fetch('./data.json'); // request local data.json
    if(!res.ok) throw new Error('Network error'); // handle HTTP errors
    users = await res.json(); // parse JSON
    state.textContent = `Loaded ${users.length} users.`; // success message
    render(); // render cards
  } catch (err) { // on failure
    state.innerHTML = 'Failed to load. <button id="retry">Retry</button>'; // error with retry
    list.innerHTML = ''; // clear list
    document.getElementById('retry').addEventListener('click', load); // retry handler
  } // end catch
} // end load

// Wire filter input
filter.addEventListener('input', render); // re-render as user types

// Kick off initial load
load(); // call load on startup
