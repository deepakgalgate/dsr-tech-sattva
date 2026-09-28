import { useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses, categories } from "../data/courses";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        category === "All" || course.category === category;

      const query = search.toLowerCase();

      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl">
          <span className="section-label">COURSE CATALOG</span>

          <h1 className="section-title">Find Your Next Skill</h1>

          <p className="section-text">
            Explore practical technology programs across software development,
            AI, Cloud, DevOps, Data and testing.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_260px]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses, technologies..."
            className="form-input"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-input"
          >
            <option>All</option>

            {categories.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
            <h3 className="font-bold">No courses found</h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another search term or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}