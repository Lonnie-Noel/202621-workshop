# Multi-Agent Orchestration Dashboard — Frontend-Only Fast MVP

## TL;DR
> **User change**: Reduce elapsed time. Remove backend features. Replace backend/API with frontend dummy data so the dashboard can be checked quickly.
> **Summary**: Build a Vite React-only dashboard MVP with local dummy orchestration data, polished mission-control UI, lightweight tests, and browser QA.
> **Deliverables**: frontend-only React app, local dummy data, four requested dashboard areas, distinctive CSS design, fast tests, README.
> **Critical Path**: Task 1 ✅ → Task 2 → Tasks 3-5 → Task 6 → Final Verification.

## Current Decision Update
- Backend/Node API implementation is removed from MVP scope.
- Express server, `/api/*` routes, Supertest, API smoke curls, API-owned data, and Playwright webServer for API are no longer required.
- Dummy data should live in frontend source, e.g. `src/data/dashboardData.js`.
- Frontend must still show: agent cards, task status list, log/memo panel, and committee-style model strategy checklist.
- Design should still follow `frontend-design` guidance: retro-futuristic mission-control / committee war-room, not generic admin UI.

## Definition of Done
- `npm install` succeeds.
- `npm run build` succeeds.
- `npm test -- --run` succeeds.
- `npm run dev:web` or `npm run dev` starts the frontend only.
- Dashboard renders at desktop and mobile widths without console errors or horizontal overflow.

## Must NOT Have
- No backend server requirement for MVP.
- No Express API endpoints, database, authentication, realtime, polling, CRUD editing, model API calls, real agent execution, charts, drag/drop, theme switcher, or heavy UI framework.
- No generic AI dashboard style: avoid Inter/Roboto/Arial/system-font-first look and purple-gradient-on-white templates.

## TODOs

- [x] 1. Bootstrap npm/Vite/Express workspace

  **Status**: Completed before the scope reduction. Verified `npm install`, `npm run build`, and `npm test -- --run`. Scope is now narrowed, so Task 2 will remove backend-specific bootstrap remnants.
  **Evidence**: `.omo/evidence/task-1-bootstrap-build.txt`, `.omo/evidence/task-1-bootstrap-error.txt`.

- [ ] 2. Convert bootstrap to frontend-only dummy-data workspace

  **What to do**: Remove backend-oriented MVP requirements from the app workspace: remove `server/`, remove Express/Supertest dependencies, remove `dev:api` and `test:api` scripts, keep frontend scripts, and add `src/data/dashboardData.js` with local dummy agents/tasks/logs/modelStrategy data.
  **Must NOT do**: Do not build full UI panels yet; do not add backend/API routes.
  **Recommended Agent Profile**: `guru-programmer`; Skills: []
  **Acceptance Criteria**:
  - [ ] `package.json` has frontend-only scripts: `dev`, `dev:web`, `build`, `test`, `preview`.
  - [ ] No `server/` directory is required for the MVP.
  - [ ] `src/data/dashboardData.js` exports agents, tasks, logs, and modelStrategy arrays with edge cases.
  - [ ] `npm install`, `npm run build`, and `npm test -- --run` pass.

- [ ] 3. Build frontend dashboard panels from dummy data

  **What to do**: Implement components for agent cards, task status list, log/memo panel, and model strategy checklist. Wire them into `src/App.jsx` using `src/data/dashboardData.js`.
  **Must NOT do**: Do not fetch from API; do not add editing controls.
  **Recommended Agent Profile**: `worker-holic-programmer`; Skills: [`frontend-ui-ux`]
  **Acceptance Criteria**:
  - [ ] All four requested dashboard areas render from dummy data.
  - [ ] Task with no assigned agent displays `Unassigned`.
  - [ ] Unknown/error status renders a visible warning label.
  - [ ] `npm test -- --run` passes.

- [ ] 4. Apply distinctive mission-control visual design

  **What to do**: Add/refine `src/styles.css` for dark obsidian surfaces, amber/cyan accents, layered grid/noise atmosphere, responsive layout, status badges, focus-visible states, and reduced-motion fallback.
  **Must NOT do**: Do not add Tailwind/MUI/Chakra/Bootstrap or animation libraries.
  **Recommended Agent Profile**: `worker-holic-programmer`; Skills: [`frontend-ui-ux`]
  **Acceptance Criteria**:
  - [ ] Desktop layout feels like a mission-control dashboard.
  - [ ] Mobile layout stacks cleanly at 375px with no horizontal overflow.
  - [ ] `npm run build` passes.

- [ ] 5. Add fast component/smoke tests for frontend-only MVP

  **What to do**: Add or update tests for dummy data shape, all four panels, and App rendering. Keep tests behavior-based, not snapshot-only.
  **Must NOT do**: Do not add API/Supertest tests.
  **Recommended Agent Profile**: `tdd-agent`; Skills: []
  **Acceptance Criteria**:
  - [ ] Tests verify agent cards, task list, logs/memos, model checklist, and edge cases.
  - [ ] `npm test -- --run` passes.

- [ ] 6. Final frontend QA and README update

  **What to do**: Update README for frontend-only local usage and removed backend scope. Run final verification commands and browser QA.
  **Must NOT do**: Do not claim backend/API exists.
  **Recommended Agent Profile**: `qa-e2e-agent` for browser QA plus `guru-programmer` for README fixes; Skills: [`playwright`] for QA.
  **Acceptance Criteria**:
  - [ ] README documents frontend-only scope, scripts, dummy data, and future backend enhancement option.
  - [ ] `npm install`, `npm run build`, and `npm test -- --run` pass.
  - [ ] Browser QA confirms all four dashboard areas render with no console errors.

## Final Verification Wave
- [ ] F1. Scope and plan compliance review — confirm backend is removed and frontend-only scope is met.
- [ ] F2. Code quality review — confirm clean component/data structure and no scope creep.
- [ ] F3. Browser QA review — confirm desktop/mobile render, no console errors, and design fidelity.

## Success Criteria
- Frontend-only dashboard can be checked quickly.
- Four requested panels are visible and driven by local dummy data.
- Visual design is distinctive and aligned with frontend-design guidance.
- Backend work is explicitly deferred, not partially implemented.
