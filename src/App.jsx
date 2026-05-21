import { AgentCards } from './components/AgentCards.jsx';
import { LogMemoPanel } from './components/LogMemoPanel.jsx';
import { ModelStrategyChecklist } from './components/ModelStrategyChecklist.jsx';
import { TaskStatusList } from './components/TaskStatusList.jsx';
import { agents, logs, modelStrategy, tasks } from './data/dashboardData.js';
import './styles.css';

export default function App() {
  return (
    <main className="dashboard-shell" aria-labelledby="app-title">
      <header className="dashboard-hero">
        <p className="eyebrow">Committee mission-control</p>
        <h1 id="app-title">Multi-Agent Orchestration Dashboard</h1>
        <p>
          Frontend-only readout powered by local dummy data for a fast MVP coordination pass.
        </p>
      </header>

      <div className="dashboard-grid">
        <AgentCards agents={agents} />
        <TaskStatusList agents={agents} tasks={tasks} />
        <LogMemoPanel agents={agents} logs={logs} />
        <ModelStrategyChecklist items={modelStrategy} />
      </div>
    </main>
  );
}
