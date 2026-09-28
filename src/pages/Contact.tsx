import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl">
          <span className="section-label">CONTACT</span>

          <h1 className="section-title">
            Let's Talk About Your Career
          </h1>

          <p className="section-text">
            Have questions about a course or want help choosing the right
            learning path? Get in touch with our team.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-5">
            <ContactInfo
              icon={<Phone />}
              title="Call Us"
              value={
                <>
                  +91 8378095478
                  <br />
                  +91 8421334643
                </>
              }
            />

            <ContactInfo
              icon={<Mail />}
              title="Email"
              value="admin@dsrtechsattva.com"
            />

            <ContactInfo
              icon={<MapPin />}
              title="Training Locations"
              value="Bangalore · Hyderabad · Pune · Chennai · Mumbai · Ahmedabad · Delhi · Kolkata"
            />

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <div className="font-bold">Online Training</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Online training delivered across PAN India.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-7">
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    className="form-input"
                    placeholder="Full Name"
                  />

                  <input
                    required
                    type="email"
                    className="form-input"
                    placeholder="Email"
                  />
                </div>

                <input
                  required
                  type="tel"
                  className="form-input"
                  placeholder="Phone"
                />

                <input
                  className="form-input"
                  placeholder="Current Role"
                />

                <select required className="form-input" defaultValue="">
                  <option value="" disabled>
                    Experience
                  </option>
                  <option>Student</option>
                  <option>0–2 Years</option>
                  <option>3–5 Years</option>
                  <option>6–10 Years</option>
                  <option>10+ Years</option>
                </select>

                <select required className="form-input" defaultValue="">
                  <option value="" disabled>
                    Interested Course
                  </option>
                  <option>Cloud & DevOps</option>
                  <option>AI & Machine Learning</option>
                  <option>Software Development</option>
                  <option>Data Engineering</option>
                  <option>Software Testing</option>
                </select>

                <select required className="form-input" defaultValue="">
                  <option value="" disabled>
                    Preferred Learning Mode
                  </option>
                  <option>Online</option>
                  <option>Offline</option>
                  <option>Flexible</option>
                </select>

                <textarea
                  className="form-input min-h-32"
                  placeholder="Message"
                />

                <button className="w-full rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white hover:bg-blue-700">
                  Request a Callback
                </button>
              </form>
            ) : (
              <div className="py-20 text-center">
                <div className="text-4xl text-emerald-500">✓</div>

                <h2 className="mt-5 text-2xl font-black">
                  Thanks for contacting us!
                </h2>

                <p className="mt-3 text-slate-500">
                  Our career advisor will contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
        {icon}
      </div>

      <h3 className="mt-4 font-bold">{title}</h3>

      <div className="mt-2 text-sm leading-6 text-slate-500">{value}</div>
    </div>
  );
}