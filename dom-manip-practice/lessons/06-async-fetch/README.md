# Lesson 06 — Async & Fetch

**Goals**
- Fetch JSON with `fetch` and `await response.json()`.
- Render a list efficiently and handle loading and error states.
- Provide a "retry" button when network fails.
- Use a local `data.json` to avoid CORS issues when not running a server.

**Exercise**
Build a "Users Directory":
- Load `data.json` and render user cards (name, email, company).
- Add a filter input that filters by name or company as you type.
- Show "Loading…" while fetching and an error message on failure.
