const statusLabels = {
  blocked: 'Blocked',
  done: 'Done',
  idle: 'Idle',
  info: 'Info',
  memo: 'Memo',
  review: 'Review',
  running: 'Running',
  unknown: 'Unknown',
  warning: 'Warning'
};

export function StatusBadge({ status }) {
  const normalizedStatus = status || 'unknown';
  const label = statusLabels[normalizedStatus] || normalizedStatus;

  return (
    <span className={`status-badge status-badge--${normalizedStatus}`}>
      {label}
    </span>
  );
}
