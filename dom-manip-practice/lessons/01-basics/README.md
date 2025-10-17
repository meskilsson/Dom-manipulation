# Lesson 01 — DOM Basics 001

**Goals**
- Select elements: `getElementById`, `querySelector(All)`.
- Read & write content: `.textContent`, `.innerHTML` (prefer textContent for safety).
- Modify classes & styles: `.classList.add/remove/toggle`, `.style`.
- Create/insert/remove nodes: `document.createElement`, `.append`, `.prepend`, `.before`, `.remove`.
- Use `dataset` attributes and `id`s to target elements.
- Understand reflow/paint basics and why batching updates helps.

**Exercise**
Build a tiny "List Playground":
- Buttons to: change the title text, add a list item, remove the selected item, toggle highlight class, and clear all items.
- Clicking a list item selects it (only one item selected at a time).
- Show a status line describing the last action.
