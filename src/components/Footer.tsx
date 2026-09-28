import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold">
                D
              </div>

              <div className="font-bold">DSR TechSattva</div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Where Ambition Meets Real-World IT Skills.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              DSR TECHSATTVA PRIVATE LIMITED
            </p>
          </div>

          <FooterColumn
            title="Courses"
            links={[
              "Software Development",
              "AI & Machine Learning",
              "Software Testing",
              "Cloud Computing",
              "Data Professionals",
              "Linux",
            ]}
          />

          <FooterColumn
            title="Company"
            links={["About", "Corporate Training", "Contact"]}
          />

          <FooterColumn
            title="Resources"
            links={["Career Guidance", "Blogs", "FAQs"]}
          />
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-sm text-slate-500">
          © 2026 DSR Techsattva Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>

      <div className="mt-5 space-y-3">
        {links.map((link) => (
          <Link
            key={link}
            to={link === "About" ? "/about" : link === "Contact" ? "/contact" : "/courses"}
            className="block text-sm text-slate-400 hover:text-white"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}