const projects = [
  {
    title: "Cloud-Native Microservices Platform",
    technologies: "Java • Spring Boot • Azure • Docker • Kubernetes",
    description:
      "Build a production-oriented microservices platform using modern cloud-native technologies.",
  },
  {
    title: "AI-Powered Data Pipeline",
    technologies: "Python • Azure Data Factory • Databricks • AI",
    description:
      "Design a data pipeline that processes and prepares data for analytics and AI workflows.",
  },
  {
    title: "Enterprise DevOps Platform",
    technologies: "Azure DevOps • Terraform • Kubernetes • CI/CD",
    description:
      "Create an infrastructure and delivery workflow inspired by enterprise engineering environments.",
  },
  {
    title: "GenAI Assistant",
    technologies: "Python • LLM • RAG • Vector Database • Azure AI",
    description:
      "Build a practical GenAI assistant using retrieval-augmented generation concepts.",
  },
];

export default function Projects() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-label">PRACTICAL LEARNING</span>

          <h2 className="section-title">
            Build Projects That Look Like Real Work
          </h2>

          <p className="section-text">
            Learn by working through realistic technology and business
            scenarios instead of only studying theory.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="mb-6 h-2 w-16 rounded-full bg-blue-600" />

              <h3 className="text-xl font-bold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {project.description}
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-xs font-semibold text-slate-600">
                {project.technologies}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}