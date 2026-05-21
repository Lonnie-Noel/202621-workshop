import { describe, expect, it } from 'vitest';
import { agents, logs, modelStrategy, tasks } from '../data/dashboardData.js';

const requiredStatuses = ['idle', 'running', 'blocked', 'review', 'done', 'unknown'];

describe('dashboard dummy data', () => {
  it('exports enough records for the first dashboard pass', () => {
    expect(agents).toHaveLength(6);
    expect(tasks).toHaveLength(6);
    expect(logs).toHaveLength(6);
    expect(modelStrategy).toHaveLength(5);
  });

  it('covers orchestration status edge cases', () => {
    const observedStatuses = new Set([
      ...agents.map((agent) => agent.status),
      ...tasks.map((task) => task.status)
    ]);

    for (const status of requiredStatuses) {
      expect(observedStatuses.has(status)).toBe(true);
    }
  });

  it('includes unassigned work, long log content, and warning checklist states', () => {
    expect(tasks.some((task) => task.assignedAgentId === null)).toBe(true);
    expect(logs.some((log) => log.message.length > 180)).toBe(true);
    expect(modelStrategy.some((item) => ['warning', 'unknown'].includes(item.status))).toBe(true);
  });
});
