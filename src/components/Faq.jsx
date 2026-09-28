import { useState } from "react";
import { FAQ } from "../data/faq";

export default function Faq() {
  const [openId, setOpenId] = useState(FAQ[0].id);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="section section-divider" id="faq">
      <div className="container">
        <div className="section-head">
          <h2>Frequently asked questions</h2>
          <p>The questions we hear most before someone registers.</p>
        </div>

        <div className="accordion accordion-faq">
          {FAQ.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div className="accordion-item" key={item.id}>
                <h3 className="accordion-heading">
                  <button
                    className="accordion-trigger accordion-trigger-faq"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${item.id}`}
                    id={`trigger-${item.id}`}
                    onClick={() => toggle(item.id)}
                  >
                    <span className="module-title">{item.q}</span>
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
                  id={`panel-${item.id}`}
                  role="region"
                  aria-labelledby={`trigger-${item.id}`}
                  className="accordion-panel"
                  hidden={!isOpen}
                >
                  <p className="faq-answer">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
