const STATS = [
  { value: "12 wks", label: "Batch length" },
  { value: "9", label: "Tools & platforms" },
  { value: "1:1", label: "Mentor support" },
  { value: "70%", label: "Project-based" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>
            Learn data engineering the way it's practiced on the job, not just in theory.
          </h1>
          <p className="hero-sub">
            A 12-week, mentor-led program covering Python, SQL, Airflow, Spark and cloud
            data platforms — built for students, freshers, career switchers and working
            professionals who want to build real pipelines, not just watch slides.
          </p>
          <div className="hero-ctas">
            <a href="#register" className="btn btn-primary">
              Register
            </a>
            <a href="#curriculum" className="btn btn-outline">
              View curriculum
            </a>
          </div>

          <dl className="hero-stats">
            {STATS.map((s) => (
              <div key={s.label} className="hero-stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 320 320" width="100%" height="100%">
            <line x1="160" y1="40" x2="160" y2="280" stroke="#0A1F3D" strokeOpacity="0.12" strokeWidth="1" />
            <line x1="40" y1="160" x2="280" y2="160" stroke="#0A1F3D" strokeOpacity="0.12" strokeWidth="1" />

            {/* top */}
            <path d="M160 40 L200 100 L160 160 L120 100 Z" fill="#0A1F3D" />
            {/* left */}
            <path d="M40 160 L100 120 L160 160 L100 200 Z" fill="#0A1F3D" />
            {/* bottom */}
            <path d="M160 280 L120 220 L160 160 L200 220 Z" fill="#0A1F3D" />
            {/* right — accent arm */}
            <path d="M280 160 L220 200 L160 160 L220 120 Z" fill="#1B6BFF" />
            {/* center node */}
            <circle cx="160" cy="160" r="14" fill="#14B8C4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
