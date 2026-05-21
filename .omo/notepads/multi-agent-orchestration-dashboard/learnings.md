
## 2026-05-21 Task 2 - frontend-only dummy data workspace
- Removed the Express bootstrap path so the MVP runs as a Vite-only frontend workspace.
- Added src/data/dashboardData.js as the local source of truth for Task 3 panels: agents, tasks, logs, and modelStrategy.
- Captured required edge cases in dummy data and a lightweight Vitest data-shape test: status variants, unassigned task, long memo, and warning/unknown checklist states.

## 2026-05-21 Task 2 - repository hygiene
- Added root `.gitignore` coverage for generated dependency/build folders, browser/test artifacts, environment files, and logs so Task 2 verification does not surface `node_modules/` or `dist/` as repository changes.