import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeadModal from "../components/LeadModal";

export default function MainLayout() {
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onLeadClick={() => setLeadOpen(true)} />

      <main>
        <Outlet context={{ openLead: () => setLeadOpen(true) }} />
      </main>

      <Footer />

      <LeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
      />

      <button
        onClick={() => setLeadOpen(true)}
        className="fixed bottom-5 right-5 z-40 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-blue-600/30 hover:bg-blue-700"
      >
        Talk to Advisor
      </button>
    </div>
  );
}