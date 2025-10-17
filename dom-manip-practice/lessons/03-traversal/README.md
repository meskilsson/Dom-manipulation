# Lesson 03 — Traversal & Relationships

**Goals**
- Move around the DOM: `parentElement`, `children`, `firstElementChild`, `lastElementChild`, `nextElementSibling`, `previousElementSibling`.
- Use `closest()` for robust ancestor finding.
- Understand NodeList vs HTMLCollection and live vs static collections.
- Build elements efficiently with `DocumentFragment`.

**Exercise**
Create an FAQ accordion:
- Clicking a question expands its answer and collapses others.
- Keyboard support: Enter/Space toggles; Up/Down moves focus.
- Use traversal (siblings/parents) to open/close the correct panel.
