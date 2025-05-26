import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-cream text-slate-800 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-forestDark mb-4">About Holidaze</h1>
        <p className="text-slate-700 leading-relaxed">
          Holidaze is a modern booking platform for nature-inspired getaways.
          Whether you're looking for a forest retreat, a sunny beach hut, or a luxurious countryside villa, we've got you covered.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
