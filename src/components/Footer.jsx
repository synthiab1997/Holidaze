import React from 'react';

function Footer() {
  return (
    <footer className="bg-forest text-white text-center py-4 mt-16">
      <p>&copy; {new Date().getFullYear()} Holidaze. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
