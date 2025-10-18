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
let statusText = document.getElementById('status');

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
    });

    clicked.classList.add('selected');

    if (clicked) {
        btnRemove.disabled = false;
        statusText.textContent = `You selected ${clicked.textContent} and enabled the "Remove Selected" button.`;
    }
});

btnTitle.addEventListener('click', () => {
    let newTitle = prompt("Add a new title: ");
    if (newTitle) {
        title.textContent = newTitle;
        statusText.textContent = `Title changed to: ${title.textContent}`;
    }
});

btnAdd.addEventListener('click', () => {
    let addFruit = prompt("Add a new fruit: ");
    if (addFruit) {
        let newLi = document.createElement('li');
        newLi.textContent = addFruit;
        list.appendChild(newLi);
        statusText.textContent = `You added ${newLi.textContent}`;
    }
});


btnRemove.addEventListener('click', () => {
    let selected = document.querySelector('.selected');
    if (selected) {
        selected.remove();
        statusText.textContent = `You removed ${selected.textContent}.`;
    }
});

btnToggle.addEventListener('click', () => {
    let selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.toggle('highlight');
        statusText.textContent = `You highlighted ${selected.textContent}.`;
    }
});

btnClear.addEventListener('click', () => {
    let li = list.querySelectorAll('li');
    li.forEach((l) => {
        l.remove();
        statusText.textContent = `All items removed.`;
    })
});





