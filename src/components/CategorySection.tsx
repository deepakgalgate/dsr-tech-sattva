import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  ShieldCheck,
  Terminal,
  ArrowRight,
} from "lucide-react";
import { categories } from "../data/courses";
import { Link } from "react-router-dom";

const icons = {
  Code2,
  BrainCircuit,
  ShieldCheck,
  Cloud,
  Database,
  Terminal,
};

export default function CategorySection() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="text-center">
          <span className="section-label">LEARNING AREAS</span>

          <h2 className="section-title">
            Master Every Area of Your Career
          </h2>

          <p className="section-text mx-auto">
            Transform your career with intensive mentorship programs and
            practical technology training.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons];

            return (
              <div key={category.name} className="category-card">
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Icon size={24} />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    {category.count} Courses
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>

                <Link
                  to="/courses"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                >
                  Explore Courses
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}