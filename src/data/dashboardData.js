export const agents = [
  {
    id: 'atlas',
    name: 'Atlas',
    role: 'Orchestration Lead',
    status: 'running',
    currentFocus: 'Sequencing handoffs across planning, build, and QA lanes',
    queueDepth: 4
  },
  {
    id: 'forge',
    name: 'Forge',
    role: 'Guru Programmer',
    status: 'review',
    currentFocus: 'Checking architecture fit before implementation expands',
    queueDepth: 2
  },
  {
    id: 'loom',
    name: 'Loom',
    role: 'Senior Designer',
    status: 'idle',
    currentFocus: 'Waiting for panel composition inputs',
    queueDepth: 0
  },
  {
    id: 'sentinel',
    name: 'Sentinel',
    role: 'Security Compliance',
    status: 'blocked',
    currentFocus: 'Blocked on audit-boundary decisions for future service work',
    queueDepth: 1
  },
  {
    id: 'spark',
    name: 'Spark',
    role: 'QA/E2E',
    status: 'done',
    currentFocus: 'Bootstrap smoke path verified',
    queueDepth: 0
  },
  {
    id: 'ghost',
    name: 'Ghost',
    role: 'Unclassified Specialist',
    status: 'unknown',
    currentFocus: 'Telemetry heartbeat missing after scope rewrite',
    queueDepth: 3
  }
];

export const tasks = [
  {
    id: 'task-01',
    title: 'Rewrite MVP scope',
    summary: 'Convert the dashboard plan from service-backed delivery to a frontend-only fast MVP.',
    status: 'done',
    assignedAgentId: 'atlas',
    priority: 'high'
  },
  {
    id: 'task-02',
    title: 'Create dashboard dummy data',
    summary: 'Provide local orchestration data for the first UI pass.',
    status: 'running',
    assignedAgentId: 'forge',
    priority: 'high'
  },
  {
    id: 'task-03',
    title: 'Build panel scaffolds',
    summary: 'Render agents, task queue, memo log, and model strategy checklist from local arrays.',
    status: 'idle',
    assignedAgentId: 'loom',
    priority: 'medium'
  },
  {
    id: 'task-04',
    title: 'Resolve compliance boundary',
    summary: 'Clarify which future audit events need retention before any real agent execution is introduced.',
    status: 'blocked',
    assignedAgentId: 'sentinel',
    priority: 'medium'
  },
  {
    id: 'task-05',
    title: 'Unassigned visual QA sweep',
    summary: 'This deliberately unassigned task proves the dashboard can show work that has not yet been routed to an agent.',
    status: 'review',
    assignedAgentId: null,
    priority: 'low'
  },
  {
    id: 'task-06',
    title: 'Investigate missing heartbeat',
    summary: 'The placeholder telemetry stream is intentionally represented as unknown so the UI can show ambiguous orchestration state using only local fixture data.',
    status: 'unknown',
    assignedAgentId: 'ghost',
    priority: 'low'
  }
];

export const logs = [
  {
    id: 'log-01',
    level: 'info',
    sourceAgentId: 'atlas',
    message: 'Scope reduction accepted: service integration work is deferred and frontend dummy data is now the source of truth for MVP visuals.',
    timestamp: '2026-05-21T09:00:00.000Z'
  },
  {
    id: 'log-02',
    level: 'memo',
    sourceAgentId: 'forge',
    message: 'Keep the current placeholder React shell intact until Task 3 owns dashboard panel rendering.',
    timestamp: '2026-05-21T09:08:00.000Z'
  },
  {
    id: 'log-03',
    level: 'warning',
    sourceAgentId: 'sentinel',
    message: 'Do not add remote data contracts, live clients, or hidden service dependencies during the frontend-only pass.',
    timestamp: '2026-05-21T09:14:00.000Z'
  },
  {
    id: 'log-04',
    level: 'info',
    sourceAgentId: 'spark',
    message: 'Smoke test remains focused on the bootstrap shell while data coverage moves into a lightweight module test.',
    timestamp: '2026-05-21T09:22:00.000Z'
  },
  {
    id: 'log-05',
    level: 'memo',
    sourceAgentId: null,
    message: 'Long memo edge case: during the first visual pass, the log panel should be able to contain a verbose coordination note that wraps across several lines, references multiple agents, and still remains readable without requiring truncation, remote pagination, realtime subscriptions, or any fetch layer.',
    timestamp: '2026-05-21T09:31:00.000Z'
  },
  {
    id: 'log-06',
    level: 'unknown',
    sourceAgentId: 'ghost',
    message: 'Heartbeat state could not be classified after the scope rewrite.',
    timestamp: '2026-05-21T09:37:00.000Z'
  }
];

export const modelStrategy = [
  {
    id: 'strategy-01',
    label: 'Use fast local fixtures for panel development',
    owner: 'Atlas',
    status: 'done',
    rationale: 'The MVP needs quick visual validation before live orchestration exists.'
  },
  {
    id: 'strategy-02',
    label: 'Defer live model calls',
    owner: 'Sentinel',
    status: 'done',
    rationale: 'Real model integration is outside this frontend-only task.'
  },
  {
    id: 'strategy-03',
    label: 'Represent committee disagreements explicitly',
    owner: 'Forge',
    status: 'review',
    rationale: 'The UI should be ready to show a strategy item awaiting review.'
  },
  {
    id: 'strategy-04',
    label: 'Flag unknown routing signals',
    owner: 'Ghost',
    status: 'unknown',
    rationale: 'Unknown checklist state is an edge case for warning labels.'
  },
  {
    id: 'strategy-05',
    label: 'Warn when service assumptions reappear',
    owner: 'Sentinel',
    status: 'warning',
    rationale: 'A warning item protects the frontend-only scope during later UI work.'
  }
];
