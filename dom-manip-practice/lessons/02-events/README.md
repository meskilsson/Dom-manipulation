# Lesson 02 — Events & Event Delegation

**Goals**
- Understand `addEventListener` (types, options: `capture`, `once`).
- Use the event object (`target`, `currentTarget`, `key`, `preventDefault`, `stopPropagation`).
- Implement **event delegation** for lists/grids.
- Handle common UI patterns: buttons, forms, keyboard, context menu.

**Exercise**
Build a small Todo list:
- A form adds items to a `<ul>`.
- Each item has a delete button and a checkbox to toggle completion.
- Use **one** click listener on the `<ul>` (delegation) for both delete & toggle.
- Display counts: total, completed, remaining.
- Persist to `localStorage` (bonus).
