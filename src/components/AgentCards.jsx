import { StatusBadge } from './StatusBadge.jsx';

export function AgentCards({ agents }) {
  return (
    <section className="dashboard-panel dashboard-panel--wide" aria-labelledby="agent-cards-title">
      <div className="panel-heading">
        <p className="eyebrow">Active roster</p>
        <h2 id="agent-cards-title">Agent Cards</h2>
      </div>

      <div className="agent-card-grid">
        {agents.map((agent) => (
          <article className="agent-card" key={agent.id}>
            <div className="card-header">
              <div>
                <h3>{agent.name}</h3>
                <p>{agent.role}</p>
              </div>
              <StatusBadge status={agent.status} />
            </div>
            <p className="card-focus">{agent.currentFocus}</p>
            <p className="queue-depth">Queue depth: {agent.queueDepth}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
