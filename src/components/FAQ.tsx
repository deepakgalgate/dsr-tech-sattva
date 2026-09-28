import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who are these courses for?",
    a: "The programs are designed for students, working professionals and technology professionals looking to build or strengthen practical IT skills.",
  },
  {
    q: "Are the courses suitable for working professionals?",
    a: "Yes. Programs can be structured around professional schedules depending on the selected training format.",
  },
  {
    q: "Are the courses beginner friendly?",
    a: "Several programs start from fundamentals. The course level and prerequisites are clearly shown for each program.",
  },
  {
    q: "Do I get hands-on projects?",
    a: "Practical exercises and project-based learning are an important part of the learning approach.",
  },
  {
    q: "Do you provide career guidance?",
    a: "Career guidance can include skill mapping, resume positioning, interview preparation and career discussions.",
  },
  {
    q: "Are classes online or offline?",
    a: "Training availability can vary by program and location. Contact the course advisor for current options.",
  },
  {
    q: "How long does a course take?",
    a: "Duration varies by program. Featured programs generally range from several weeks to around ten weeks.",
  },
  {
    q: "Do you provide corporate training?",
    a: "Yes. Corporate programs can be customised around technology stacks, teams and business requirements.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container max-w-4xl">
        <div className="text-center">
          <span className="section-label">FAQ</span>

          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((faq, index) => (
            <div key={faq.q}>
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-semibold"
                aria-expanded={active === index}
              >
                {faq.q}

                <ChevronDown
                  size={18}
                  className={`shrink-0 transition ${
                    active === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-sm leading-7 text-slate-500">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}