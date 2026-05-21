import { StatusBadge } from './StatusBadge.jsx';

function formatTimestamp(timestamp) {
  return new Intl.DateTimeFormat('en', {
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    month: 'short',
    timeZone: 'UTC',
    timeZoneName: 'short'
  }).format(new Date(timestamp));
}

export function LogMemoPanel({ agents, logs }) {
  const agentNames = new Map(agents.map((agent) => [agent.id, agent.name]));

  return (
    <section className="dashboard-panel" aria-labelledby="log-memo-title">
      <div className="panel-heading">
        <p className="eyebrow">Chronicle</p>
        <h2 id="log-memo-title">Log Memo Panel</h2>
      </div>

      <ol className="log-list">
        {logs.map((log) => {
          const sourceName = log.sourceAgentId
            ? agentNames.get(log.sourceAgentId) || 'Unassigned source'
            : 'System source';

          return (
            <li className="log-entry" key={log.id}>
              <div className="log-meta">
                <time dateTime={log.timestamp}>{formatTimestamp(log.timestamp)}</time>
                <StatusBadge status={log.level} />
                <span>{sourceName}</span>
              </div>
              <p>{log.message}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
