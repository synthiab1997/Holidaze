import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-cream text-slate-800 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-forestDark mb-4">Contact Us</h1>
        <p className="text-slate-700 mb-6">
          We'd love to hear from you! Reach out at:
        </p>
        <ul className="space-y-2 text-slate-600">
          <li>Email: contact@holidaze.com</li>
          <li>Phone: +47 123 456 789</li>
          <li>Location: Oslo, Norway</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
