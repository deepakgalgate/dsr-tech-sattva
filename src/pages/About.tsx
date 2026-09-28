import { Target, Eye, Lightbulb, Users } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Mission",
    text: "Help professionals build practical technology skills that remain relevant in a rapidly changing industry.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "Create a modern learning ecosystem where technology education connects directly with career growth.",
  },
  {
    icon: Lightbulb,
    title: "Learning Philosophy",
    text: "Combine fundamentals, practical exercises, projects and career-oriented guidance.",
  },
  {
    icon: Users,
    title: "Career Focus",
    text: "Support learners with structured paths for skill development, interview preparation and professional growth.",
  },
];

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl">
          <span className="section-label">ABOUT DSR TECHSATTVA</span>

          <h1 className="section-title">
            Where Ambition Meets Real-World IT Skills
          </h1>

          <p className="section-text">
            DSR TechSattva is focused on practical technology education across
            Cloud, DevOps, Data, AI, software development and testing.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="feature-card">
              <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                <Icon />
              </div>

              <h2 className="mt-5 text-xl font-bold">{title}</h2>

              <p className="mt-3 leading-7 text-slate-500">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white md:p-12">
          <h2 className="text-2xl font-black">Practical Learning First</h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            The learning experience is designed to move beyond passive theory.
            Learners should understand concepts, practice them, build projects
            and develop the confidence to discuss technology in professional
            environments.
          </p>
        </div>
      </div>
    </section>
  );
}