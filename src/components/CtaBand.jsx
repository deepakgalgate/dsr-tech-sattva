export default function CtaBand() {
  return (
    <section className="cta-band" id="register">
      <div className="container cta-band-inner">
        <div>
          <h2>Ready to start engineering data?</h2>
          <p>Seats for the next batch are limited to keep mentor ratios high.</p>
        </div>
        <div className="cta-band-actions">
          <a href="#" className="btn btn-solid-on-dark">
            Register now
            <span className="visually-hidden"> (placeholder link)</span>
          </a>
          <a href="#" className="btn btn-ghost-on-dark">
            Chat on WhatsApp
            <span className="visually-hidden"> (placeholder link)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
