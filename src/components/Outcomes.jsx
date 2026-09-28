const OUTCOMES = [
  { value: "1,200+", label: "Learners trained" },
  { value: "85%", label: "Placement support rate" },
  { value: "14", label: "Weeks to job-ready" },
  { value: "40+", label: "Hiring partners" },
];

export default function Outcomes() {
  return (
    <section className="outcomes section-divider">
      <div className="container">
        <div className="outcomes-grid">
          {OUTCOMES.map((o) => (
            <div className="outcomes-cell" key={o.label}>
              <div className="outcomes-value">{o.value}</div>
              <div className="outcomes-label">{o.label}</div>
            </div>
          ))}
        </div>
        <p className="outcomes-disclaimer">
          Figures shown are placeholder values for demonstration and will be replaced with
          verified numbers before launch.
        </p>
      </div>
    </section>
  );
}
