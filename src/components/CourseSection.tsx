import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "./CourseCard";

export default function CourseSection() {
  const featuredCourses = courses.filter((course) => course.popular);

  return (
    <section id="courses" className="section">
      <div className="container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="section-label">FEATURED PROGRAMS</span>

            <h2 className="section-title">
              Courses That Add Value to Your Career
            </h2>

            <p className="section-text">
              Job-oriented programs designed to build practical skills and
              accelerate career growth.
            </p>
          </div>

          <Link
            to="/courses"
            className="font-bold text-blue-600 hover:text-blue-700"
          >
            View All Courses →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}