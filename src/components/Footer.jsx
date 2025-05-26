import React from "react";

function Footer() {
  return (
    <footer className="bg-forestDark text-white py-6 mt-16">
      <div className="container-section text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Holidaze. All rights reserved.</p>
        <p className="mt-2">
          Built with <span className="text-sun">passion</span> and{" "}
          <span className="text-sky">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
