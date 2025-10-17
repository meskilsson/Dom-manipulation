// Cache the container once to avoid repeated queries
const faq = document.querySelector('#faq'); // select the .faq wrapper

// Helper to close all items except an optional one
function closeAll(except) { // define a function that receives an element to keep open
  for (const item of faq.children) { // iterate over each direct child .item (HTMLCollection)
    if (item === except) continue; // skip the item we want to keep open
    item.classList.remove('open'); // remove the open class so the answer hides
    const btn = item.querySelector('.q'); // find the question button inside this item
    btn.setAttribute('aria-expanded', 'false'); // reflect closed state
  } // end loop
} // end closeAll

// Click handling using delegation on the container
faq.addEventListener('click', (e) => { // listen for a click on the .faq wrapper
  const btn = e.target.closest('.q'); // find the nearest .q button
  if (!btn) return; // if the click wasn't on a .q, do nothing
  const item = btn.closest('.item'); // find the .item ancestor
  const isOpen = item.classList.toggle('open'); // toggle open class, capture new state
  btn.setAttribute('aria-expanded', String(isOpen)); // set aria-expanded
  if (isOpen) closeAll(item); // if opened, close others
}); // end click

// Keyboard interactions via delegation
faq.addEventListener('keydown', (e) => { // listen for keydown events on the container
  const btn = e.target.closest('.q'); // ensure event is from a .q
  if (!btn) return; // if not, exit
  const questions = [...faq.querySelectorAll('.q')]; // static array of question buttons
  const index = questions.indexOf(btn); // find current index

  if (e.key === 'Enter' || e.key === ' ') { // Enter or Space
    e.preventDefault(); // prevent scroll/submit
    btn.click(); // reuse click logic
  } else if (e.key === 'ArrowDown') { // down arrow
    e.preventDefault(); // prevent page scroll
    const next = questions[index + 1] || questions[0]; // next or wrap
    next.focus(); // move focus
  } else if (e.key === 'ArrowUp') { // up arrow
    e.preventDefault(); // prevent page scroll
    const prev = questions[index - 1] || questions[questions.length - 1]; // prev or wrap
    prev.focus(); // move focus
  }
}); // end keydown
