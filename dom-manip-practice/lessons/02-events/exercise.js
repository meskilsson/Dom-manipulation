// YOUR GOALS:
// - Listen for the form submit and add a new <li> with a checkbox, text, and delete button.
// - Use ONE click listener on #todo-list to handle both: toggle complete & delete (delegation).
// - Update the counts after every change.
// - Bonus: save todos in localStorage and load on start.




let formSubmit = document.getElementById('todo-form');
let todoList = document.getElementById('todo-list');
let todoInput = document.getElementById('todo-input');
let counts = document.getElementById('counts');

todoList.innerHTML = localStorage.getItem('todoList') || "";


updateCount();

formSubmit.addEventListener('submit', (e) => {

    e.preventDefault();

    let newLi = document.createElement('li');
    let btnDelete = document.createElement('button');
    let checkbox = document.createElement('input');
    let text = document.createElement('p');


    btnDelete.textContent = "Delete";
    text.textContent = todoInput.value;
    checkbox.type = "checkbox";



    newLi.appendChild(text);
    newLi.appendChild(checkbox);
    newLi.appendChild(btnDelete);
    todoList.appendChild(newLi);
    updateCount();
    localStorage.setItem('todoList', todoList.innerHTML);
});

todoList.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        e.target.parentElement.remove();
    }
    if (e.target.matches('input[type="checkbox"]')) {
        e.target.closest('li').classList.toggle('completed');
    }
    updateCount();
    localStorage.setItem('todoList', todoList.innerHTML);
});

function updateCount() {
    let total = 0;
    let done = 0;
    let left = 0;

    total = todoList.querySelectorAll('li').length;
    done = todoList.querySelectorAll('li.completed').length;
    left = total - done;

    counts.textContent = `${total} total • ${done} done • ${left} left`;
}


localStorage.setItem('todoList', todoList.innerHTML);