import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Rocket,
} from "lucide-react";

interface HeroProps {
  onLeadClick: () => void;
}

const technologies = [
  "Java",
  "Python",
  "React",
  "Azure",
  "AWS",
  "Docker",
  "Kubernetes",
  "AI",
];

export default function Hero({ onLeadClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,.25),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(124,58,237,.18),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-blue-300">
            BUILT FOR THE AI-DRIVEN JOB MARKET
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            AI-Proof Your IT Career With{" "}
            <span className="text-blue-400">Cloud, Data & DevOps</span> Skills
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Advance your career with specialised, job-oriented programs and
            career pathways built around Cloud, Data Engineering, DevOps, AI,
            and the systems that power AI-driven companies.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onLeadClick}
              className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-blue-600/20 hover:bg-blue-500"
            >
              Book Free Career Strategy Call
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <a
              href="#courses"
              className="rounded-xl border border-white/20 px-6 py-3.5 text-center font-bold text-white hover:bg-white/10"
            >
              Explore Courses
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-10 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-4">
              <TechCard icon={<Cloud />} title="Cloud" text="Azure · AWS" />
              <TechCard icon={<BrainCircuit />} title="AI" text="GenAI · ML" />
              <TechCard icon={<Database />} title="Data" text="Analytics · DE" />
              <TechCard icon={<Rocket />} title="DevOps" text="CI/CD · K8s" />
            </div>

            <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-300">
                Career Path
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <Code2 size={22} />
                </div>

                <div className="flex-1">
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-4/5 rounded-full bg-blue-500" />
                  </div>
                  <div className="mt-2 text-xs text-slate-400">
                    Skills → Projects → Interviews → Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
      <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-300">
        {icon}
      </div>

      <div className="font-bold">{title}</div>
      <div className="mt-1 text-xs text-slate-400">{text}</div>
    </div>
  );
}