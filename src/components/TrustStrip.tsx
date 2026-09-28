const companies = [
  "SAP",
  "Intel",
  "IBM",
  "Microsoft",
  "Accenture",
  "Cognizant",
  "Infosys",
  "Wipro",
  "HCL",
  "Capgemini",
];

export default function TrustStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          Professionals building careers across leading organizations
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {companies.map((company) => (
            <span
              key={company}
              className="text-lg font-bold text-slate-300 transition hover:text-slate-600"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}