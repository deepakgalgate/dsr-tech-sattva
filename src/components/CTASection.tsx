interface CTASectionProps {
  onLeadClick: () => void;
}

export default function CTASection({ onLeadClick }: CTASectionProps) {
  return (
    <section className="px-5 pb-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-center text-white md:px-12">
        <h2 className="text-3xl font-black md:text-4xl">
          Your Next Career Move Starts Here.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Build the skills companies need for the AI-driven technology
          landscape.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={onLeadClick}
            className="rounded-xl bg-blue-600 px-6 py-3.5 font-bold hover:bg-blue-500"
          >
            Book Free Career Strategy Call
          </button>

          <a
            href="/courses"
            className="rounded-xl border border-white/10 px-6 py-3.5 font-bold hover:bg-white/10"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
}