const steps = [
  ["01", "Current Skillset"],
  ["02", "Skill Assessment"],
  ["03", "Structured Learning"],
  ["04", "Hands-on Projects"],
  ["05", "Interview Preparation"],
  ["06", "Career Transition"],
];

export default function CareerJourney() {
  return (
    <section className="section bg-slate-950 text-white">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-label text-blue-400">
            CAREER TRANSFORMATION
          </span>

          <h2 className="section-title text-white">
            Don't Just Learn. Transform Your Career.
          </h2>

          <p className="section-text text-slate-400">
            A structured journey from understanding your current skills to
            building practical expertise and preparing for your next role.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {steps.map(([number, title], index) => (
            <div key={number} className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-sm font-bold text-blue-400">{number}</div>

                <h3 className="mt-8 text-sm font-bold">{title}</h3>
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute right-[-12px] top-1/2 h-px w-5 bg-blue-500/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}