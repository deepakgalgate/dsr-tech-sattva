import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, courses } from "../data/courses";

interface NavbarProps {
  onLeadClick: () => void;
}

export default function Navbar({ onLeadClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
            D
          </div>

          <div>
            <div className="font-bold leading-none text-slate-950">
              DSR TechSattva
            </div>
            <div className="mt-1 text-[10px] font-medium uppercase tracking-widest text-slate-500">
              IT Career Training
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button className="nav-link flex items-center gap-1">
              Courses
              <ChevronDown size={16} />
            </button>

            {coursesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-[850px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
                <div className="grid grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <div key={category.name}>
                      <h3 className="mb-3 text-sm font-bold text-slate-950">
                        {category.name}
                      </h3>

                      <div className="space-y-2">
                        {courses
                          .filter((c) => c.category === category.name)
                          .slice(0, 4)
                          .map((course) => (
                            <Link
                              key={course.id}
                              to={`/courses/${course.id}`}
                              className="block text-sm text-slate-500 hover:text-blue-600"
                            >
                              {course.title}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/courses"
                  className="mt-6 block rounded-xl bg-slate-50 p-4 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Explore all courses →
                </Link>
              </div>
            )}
          </div>

          <Link className="nav-link" to="/corporate-training">
            Corporate Training
          </Link>

          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={onLeadClick}
            className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600"
          >
            Get Fee Quote
          </button>

          <button
            onClick={onLeadClick}
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
          >
            Talk to Advisor
          </button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <div className="space-y-4">
            <Link
              onClick={() => setMobileOpen(false)}
              className="mobile-link"
              to="/"
            >
              Home
            </Link>

            <Link
              onClick={() => setMobileOpen(false)}
              className="mobile-link"
              to="/about"
            >
              About
            </Link>

            <Link
              onClick={() => setMobileOpen(false)}
              className="mobile-link"
              to="/courses"
            >
              Courses
            </Link>

            <Link
              onClick={() => setMobileOpen(false)}
              className="mobile-link"
              to="/corporate-training"
            >
              Corporate Training
            </Link>

            <Link
              onClick={() => setMobileOpen(false)}
              className="mobile-link"
              to="/contact"
            >
              Contact
            </Link>

            <button
              onClick={() => {
                setMobileOpen(false);
                onLeadClick();
              }}
              className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
            >
              Talk to Advisor
            </button>
          </div>
        </div>
      )}
    </header>
  );
}