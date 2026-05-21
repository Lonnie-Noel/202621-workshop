# Draft: Simple Calculator

## Requirements (confirmed)
- 여러 기능을 담은 간단한 계산기를 만들어 주세요.

## Technical Decisions
- Repository is a blank slate: no existing app framework, source tree, component pattern, routing, styling, package scripts, or test setup were found.
- User selected implementation form: React/Vite.
- User selected feature scope: standard + engineering functions.
- User selected verification strategy: manual QA, no automated test setup.
- Metis guardrail applied: manual QA means agent-executed browser QA, not user-performed testing.
- Metis guardrail applied: forbid unsafe `eval()` / `Function`; implement a small bounded expression tokenizer/parser/evaluator.
- Default applied: `%` uses calculator-style percent in binary expressions (`50 + 10% = 55`) and divide-by-100 for standalone values (`10% = 0.1`); modulo is excluded.
- Default applied: memory buttons are `MC`, `MR`, `M+`, `M-`, `MS`; memory is session-only and resets on page reload.
- Default applied: history is session-only, capped at 20 entries, and includes a clear-history action.
- Default applied: keyboard support is excluded to preserve simple scope.
- Default applied: normalize floating-point display to avoid artifacts such as `0.1 + 0.2 = 0.30000000000000004`; show controlled errors for invalid expressions, division by zero, and square root of negative numbers.

## Research Findings
- App structure: no app source files found; no framework/routing/component/state/styling conventions exist.
- Similar implementations: none found.
- Test infrastructure: none found; no package.json, test framework config, CI, e2e tooling, or representative tests.
- Repository status: effectively blank exercise workspace with exercise-01.md and planning artifacts only.
- Metis identified critical ambiguity around expression evaluation, percent semantics, memory/history persistence, keyboard support, precision, and error states; defaults above resolve these without expanding scope.

## Open Questions
- None blocking.

## Scope Boundaries
- INCLUDE: React/Vite browser calculator; 사칙연산, 소수, 괄호, %, 제곱, 제곱근, 부호 전환, 메모리, 계산 기록; responsive UI; agent-executed manual QA.
- EXCLUDE: CLI-only app, keyboard input, advanced scientific functions such as trigonometry/log/constants/exponentials/unit conversion, modulo, backend/server API, routing, global state libraries, persistence beyond current browser session, automated test framework setup unless needed by implementer for sanity checks.
