// YOUR GOALS:
// 1) Select the needed nodes: #title, #list, #status, and all buttons.
// 2) When a <li> is clicked, mark it as the only .selected item (remove from others).
//    Also enable the Remove button when something is selected.
// 3) Change Title: prompt for a new title and set #title.textContent.
// 4) Add Item: prompt for text, create <li>, set textContent, append to #list.
// 5) Remove Selected: find .selected and remove it from the DOM.
// 6) Toggle Highlight: toggle .highlight on the currently selected item.
// 7) Clear All: remove all <li> children from #list.
// 8) Update #status.textContent after each action (e.g., "Added: Mango").




let title = document.getElementById('title');
let list = document.getElementById('list');
let status = document.getElementById('status');

let btnTitle = document.getElementById('btn-title');
let btnAdd = document.getElementById('btn-add');
let btnRemove = document.getElementById('btn-remove');
let btnToggle = document.getElementById('btn-toggle');
let btnClear = document.getElementById('btn-clear');


list.addEventListener('click', (e) => {
    const clicked = e.target.closest('li');
    if (!clicked) return;

    list.querySelectorAll('li').forEach((li) => {
        li.classList.remove('selected');
    })

    clicked.classList.add('selected');
});

