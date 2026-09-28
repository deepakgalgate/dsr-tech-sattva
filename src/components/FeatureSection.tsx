import {
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "Built for Today's IT Job Market",
    text: "Programs designed around current Cloud, Data, DevOps and AI-aligned skills.",
  },
  {
    icon: Workflow,
    title: "Structured Career Growth Path",
    text: "Clear guidance around skills, projects, resume positioning and interview preparation.",
  },
  {
    icon: Laptop,
    title: "Real Projects, Not Just Theory",
    text: "Practice with real-world scenarios and technology-focused projects.",
  },
  {
    icon: GraduationCap,
    title: "Designed for Working Professionals",
    text: "Flexible learning designed around jobs, responsibilities and long-term career goals.",
  },
];

export default function FeatureSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-label">CAREER-READY LEARNING</span>

          <h2 className="section-title">
            Build Skills That Stay Relevant
          </h2>

          <p className="section-text">
            AI is changing jobs faster than ever. DSR TechSattva helps
            professionals build practical Cloud, DevOps, Data Engineering and
            AI-aligned skills.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="feature-card">
              <div className="mb-5 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                <Icon size={23} />
              </div>

              <h3 className="font-bold text-slate-950">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}