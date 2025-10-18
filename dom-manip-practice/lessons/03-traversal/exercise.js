// YOUR GOALS:
// - When a .q is clicked, open its .item and close others.
// - Update aria-expanded accordingly.
// - Add keyboard support: Enter/Space toggles; ArrowUp/ArrowDown move focus between questions.

let item = document.querySelectorAll('.item');
let btnQ = document.querySelectorAll('.q');
let a = document.querySelectorAll('.a');
let btns = Array.from(btnQ);


btnQ.forEach((q) => {
    q.setAttribute('aria-expanded', 'false');

    q.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const i = btns.indexOf(e.currentTarget);
            btns[(i + 1) % btns.length].focus();
        }
    });

    q.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            const i = btns.indexOf(e.currentTarget);
            btns[(i - 1 + btns.length) % btns.length].focus();
        }
    });

    q.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.currentTarget.click();
        }
    });

    q.addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const clickedItem = btn.closest('.item');
        if (!clickedItem) return;

        item.forEach((i) => {
            i.classList.remove('open');
            const innerBtn = i.querySelector('.q');
            innerBtn.setAttribute('aria-expanded', 'false');
        });
        clickedItem.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
    });
});