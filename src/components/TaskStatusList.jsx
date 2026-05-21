import { StatusBadge } from './StatusBadge.jsx';

function buildAgentNameLookup(agents) {
  return new Map(agents.map((agent) => [agent.id, agent.name]));
}

export function TaskStatusList({ agents, tasks }) {
  const agentNames = buildAgentNameLookup(agents);

  return (
    <section className="dashboard-panel" aria-labelledby="task-status-title">
      <div className="panel-heading">
        <p className="eyebrow">Routing lane</p>
        <h2 id="task-status-title">Task Status List</h2>
      </div>

      <div className="task-list">
        {tasks.map((task) => {
          const assignedAgentName = task.assignedAgentId
            ? agentNames.get(task.assignedAgentId) || 'Unassigned'
            : 'Unassigned';

          return (
            <article className="task-row" key={task.id}>
              <div className="card-header">
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.summary}</p>
                </div>
                <StatusBadge status={task.status} />
              </div>
              <dl className="detail-pair-list">
                <div>
                  <dt>Priority</dt>
                  <dd>{task.priority}</dd>
                </div>
                <div>
                  <dt>Assigned agent</dt>
                  <dd>{assignedAgentName}</dd>
                </div>
              </dl>
            </article>
          );
        })}
      </div>
    </section>
  );
}
