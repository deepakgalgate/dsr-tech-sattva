const AUDIENCE = [
  {
    title: "Students",
    body:
      "Still in college and want a head start on the skills recruiters actually screen for, alongside your coursework.",
    position: "top",
  },
  {
    title: "Freshers",
    body:
      "Graduated recently and need a structured, project-backed portfolio to move from applications to interviews.",
    position: "left",
  },
  {
    title: "Career switchers",
    body:
      "Coming from QA, support, analytics or a non-tech background, and need a credible, guided path into engineering.",
    position: "right",
  },
  {
    title: "Upskillers",
    body:
      "Already working in tech or data, and want to formalize scattered knowledge into production-grade pipeline skills.",
    position: "bottom",
  },
];

export default function WhoItsFor() {
  return (
    <section className="section section-divider" id="who-its-for">
      <div className="container">
        <div className="section-head">
          <h2>Who this program is built for</h2>
          <p>
            Four kinds of learners, one structure. The quad below mirrors how we actually
            group cohorts — same curriculum, different starting points.
          </p>
        </div>

        <div className="quad-grid">
          {AUDIENCE.map((a) => (
            <div key={a.title} className={`quad-cell quad-${a.position}`}>
              <span className="quad-cell-dot" aria-hidden="true" />
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
          <div className="quad-center" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
