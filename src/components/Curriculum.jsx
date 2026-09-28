import { useState } from "react";
import { CURRICULUM } from "../data/curriculum";

export default function Curriculum() {
  const [openId, setOpenId] = useState(CURRICULUM[0].id);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="section section-divider" id="curriculum">
      <div className="container">
        <div className="section-head">
          <h2>Curriculum</h2>
          <p>
            Six modules across 12 weeks, each ending with a working artifact — not just
            notes. Click a module to see what's covered.
          </p>
        </div>

        <div className="accordion" role="presentation">
          {CURRICULUM.map((mod, i) => {
            const isOpen = openId === mod.id;
            return (
              <div className="accordion-item" key={mod.id}>
                <h3 className="accordion-heading">
                  <button
                    className="accordion-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${mod.id}`}
                    id={`trigger-${mod.id}`}
                    onClick={() => toggle(mod.id)}
                  >
                    <span className="accordion-trigger-left">
                      <span className="module-index">{String(i + 1).padStart(2, "0")}</span>
                      <span className="module-title-block">
                        <span className="module-title">{mod.title}</span>
                        <span className="module-weeks">{mod.weeks} · {mod.summary}</span>
                      </span>
                    </span>
                    <span className={`accordion-icon ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14">
                        <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.6" />
                        <line
                          x1="7"
                          y1="1"
                          x2="7"
                          y2="13"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          style={{
                            transition: "opacity 0.15s ease",
                            opacity: isOpen ? 0 : 1,
                          }}
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`panel-${mod.id}`}
                  role="region"
                  aria-labelledby={`trigger-${mod.id}`}
                  className="accordion-panel"
                  hidden={!isOpen}
                >
                  <ul className="topic-list">
                    {mod.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
