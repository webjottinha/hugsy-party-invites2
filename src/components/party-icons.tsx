export function Rainbow({ className = "" }: { className?: string }) {
  return (
    <div className={`rainbow ${className}`} aria-hidden="true">
      <span /><span /><span /><span /><span />
    </div>
  );
}

export function Clouds() {
  return (
    <div aria-hidden="true">
      <div className="cloud cloud-one"><i /><i /></div>
      <div className="cloud cloud-two"><i /><i /></div>
      <div className="cloud cloud-three"><i /><i /></div>
    </div>
  );
}

export function Bubbles({ count = 12 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <i
          key={index}
          className="bubble"
          style={{
            "--bubble-index": index,
            "--bubble-left": `${(index * 23 + 7) % 96}%`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}