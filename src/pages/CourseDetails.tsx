import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Layers,
  Signal,
} from "lucide-react";
import { Link, useNavigate, useParams, useOutletContext } from "react-router-dom";
import { getCourse } from "../data/courses";

interface LayoutContext {
  openLead: () => void;
}

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openLead } = useOutletContext<LayoutContext>();

  const course = id ? getCourse(id) : undefined;

  if (!course) {
    return (
      <section className="section">
        <div className="container text-center">
          <h1 className="text-3xl font-black">Course Not Found</h1>

          <Link
            to="/courses"
            className="mt-5 inline-block font-bold text-blue-600"
          >
            Browse Courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="grid gap-10 lg:grid-cols-[1fr_350px]">
          <div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
              {course.category}
            </span>

            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              {course.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              {course.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Info icon={<Clock />} label="Duration" value={course.duration} />
              <Info icon={<Signal />} label="Level" value={course.level} />
              <Info
                icon={<Layers />}
                label="Format"
                value="Practical Training"
              />
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-black">Learning Outcomes</h2>

              <div className="mt-6 space-y-4">
                {[
                  "Understand core concepts and practical workflows.",
                  "Work with relevant tools and technologies.",
                  "Apply concepts through practical exercises.",
                  "Build project-oriented technical experience.",
                  "Prepare for technical discussions and interviews.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="shrink-0 text-emerald-500" size={20} />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-black">Tools & Technologies</h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {course.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-black">Course Overview</h2>

              <p className="mt-5 leading-8 text-slate-500">
                This program focuses on building practical, job-oriented
                capabilities through structured learning, exercises and
                project-oriented practice.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50">
              <div className="text-sm font-bold text-slate-500">
                INTERESTED IN THIS COURSE?
              </div>

              <h2 className="mt-3 text-2xl font-black">
                Start your learning journey
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Speak with an advisor about the course, learning format and
                next steps.
              </p>

              <button
                onClick={openLead}
                className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white hover:bg-blue-700"
              >
                Get Fee Quote
              </button>

              <button
                onClick={openLead}
                className="mt-3 w-full rounded-xl border border-slate-300 px-5 py-3.5 font-bold text-slate-700 hover:border-blue-500 hover:text-blue-600"
              >
                Talk to Advisor
              </button>

              <div className="mt-6 border-t border-slate-100 pt-6 text-xs leading-6 text-slate-400">
                Course details, availability and fees can vary. Contact the
                course advisor for current information.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <div className="text-blue-600">{icon}</div>
      <div className="mt-4 text-xs uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div className="mt-1 font-bold">{value}</div>
    </div>
  );
}