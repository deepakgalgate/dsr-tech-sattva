import { ArrowRight, Clock3, Signal } from "lucide-react";
import { Link } from "react-router-dom";
import type { Course } from "../data/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
          {course.category}
        </span>

        {course.popular && (
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
            Popular
          </span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-950">
        {course.title}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
        {course.description}
      </p>

      <div className="mt-5 flex gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <Clock3 size={14} />
          {course.duration}
        </span>

        <span className="flex items-center gap-1">
          <Signal size={14} />
          {course.level}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {course.technologies.slice(0, 4).map((technology) => (
          <span
            key={technology}
            className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        to={`/courses/${course.id}`}
        className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-blue-600"
      >
        View Course
        <ArrowRight size={17} />
      </Link>
    </article>
  );
}