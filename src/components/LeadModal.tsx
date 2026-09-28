import { useState, type FormEvent } from "react";
import { X } from "lucide-react";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadModal({ open, onClose }: LeadModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-5 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg p-2 hover:bg-slate-100"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="pr-10">
              <div className="text-sm font-bold uppercase tracking-widest text-blue-600">
                GET STARTED
              </div>

              <h2 className="mt-2 text-2xl font-black text-slate-950">
                Talk to a Course Advisor
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Tell us about your goals and we'll help you identify a suitable
                learning path.
              </p>
            </div>

            <form onSubmit={submit} className="mt-7 space-y-4">
              <input
                required
                placeholder="Full Name"
                className="form-input"
              />

              <input
                required
                type="email"
                placeholder="Email"
                className="form-input"
              />

              <input
                required
                type="tel"
                placeholder="Phone"
                className="form-input"
              />

              <select required className="form-input" defaultValue="">
                <option value="" disabled>
                  Current Experience
                </option>
                <option>Student</option>
                <option>0–2 Years</option>
                <option>3–5 Years</option>
                <option>6–10 Years</option>
                <option>10+ Years</option>
              </select>

              <select required className="form-input" defaultValue="">
                <option value="" disabled>
                  Interested Program
                </option>
                <option>Cloud & DevOps</option>
                <option>Java Development</option>
                <option>AI & Machine Learning</option>
                <option>Data Engineering</option>
                <option>Software Testing</option>
              </select>

              <select required className="form-input" defaultValue="">
                <option value="" disabled>
                  Preferred Training Mode
                </option>
                <option>Online</option>
                <option>Offline</option>
                <option>Flexible</option>
              </select>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white hover:bg-blue-700"
              >
                Request a Callback
              </button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              ✓
            </div>

            <h2 className="mt-5 text-2xl font-black">
              Thanks for reaching out!
            </h2>

            <p className="mt-3 text-slate-500">
              Our career advisor will contact you shortly.
            </p>

            <button
              onClick={onClose}
              className="mt-7 rounded-xl bg-slate-950 px-6 py-3 font-bold text-white"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}