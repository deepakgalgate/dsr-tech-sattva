import { BrainCircuit, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const technologies = [
  "Generative AI",
  "Prompt Engineering",
  "AI Tools",
  "Azure AI",
  "Machine Learning",
  "MLOps",
  "Data Engineering",
  "Cloud",
  "DevOps",
  "Automation",
];

export default function AISection() {
  return (
    <section className="section">
      <div className="container">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-950 p-8 text-white md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-xl bg-white/10 p-3">
                <BrainCircuit />
              </div>

              <h2 className="text-3xl font-black md:text-4xl">
                Prepare for the AI-Driven Workplace
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-blue-100">
                Modern technology professionals need more than traditional
                coding skills. Build the combination of AI, Cloud, Data and
                DevOps capabilities needed for modern engineering teams.
              </p>

              <Link
                to="/courses"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700 hover:bg-blue-50"
              >
                <Sparkles size={18} />
                Explore AI Programs
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-sm font-semibold backdrop-blur"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}