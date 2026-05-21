import { StatusBadge } from './StatusBadge.jsx';

export function ModelStrategyChecklist({ items }) {
  return (
    <section className="dashboard-panel dashboard-panel--wide" aria-labelledby="model-strategy-title">
      <div className="panel-heading">
        <p className="eyebrow">Committee rules</p>
        <h2 id="model-strategy-title">Model Strategy Checklist</h2>
      </div>

      <ul className="strategy-list">
        {items.map((item) => (
          <li className="strategy-item" key={item.id}>
            <div className="card-header">
              <div>
                <h3>{item.label}</h3>
                <p>Owner: {item.owner}</p>
              </div>
              <StatusBadge status={item.status} />
            </div>
            <p>{item.rationale}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
