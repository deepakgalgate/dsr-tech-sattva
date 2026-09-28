import { useState } from "react";

const trainingAreas = [
  "Java",
  "Spring Boot",
  "Microservices",
  "React",
  "Angular",
  "Python",
  "AI",
  "Generative AI",
  "Data Engineering",
  "Azure",
  "AWS",
  "DevOps",
  "Kubernetes",
  "Terraform",
  "Software Testing",
];

export default function CorporateTraining() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="section-label">CORPORATE TRAINING</span>

            <h1 className="section-title">
              Upskill Your Technology Teams
            </h1>

            <p className="section-text">
              Build stronger engineering teams with customised technical
              training aligned to your technology stack and business goals.
            </p>

            <h2 className="mt-10 text-xl font-black">
              Training Areas
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {trainingAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/40">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-black">
                  Request Corporate Training
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Tell us about your team and training requirements.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-7 space-y-4"
                >
                  <input
                    required
                    className="form-input"
                    placeholder="Company Name"
                  />

                  <input
                    required
                    className="form-input"
                    placeholder="Contact Name"
                  />

                  <input
                    required
                    type="email"
                    className="form-input"
                    placeholder="Work Email"
                  />

                  <input
                    required
                    type="tel"
                    className="form-input"
                    placeholder="Phone"
                  />

                  <textarea
                    required
                    className="form-input min-h-32"
                    placeholder="Training requirements"
                  />

                  <button className="w-full rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white hover:bg-blue-700">
                    Request Corporate Training
                  </button>
                </form>
              </>
            ) : (
              <div className="py-16 text-center">
                <div className="text-4xl">✓</div>

                <h2 className="mt-5 text-2xl font-black">
                  Request Received
                </h2>

                <p className="mt-3 text-slate-500">
                  Our team will contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}