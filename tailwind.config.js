// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}', // Tailwind will scan these files for classes
    ],
    theme: {
        extend: {
          colors: {
            oceanBlue: '#1E90FF',    // Primary Blue (Ocean Blue)
            skyBlue: '#87CEEB',      // Accent Blue (Sky Blue)
            powderBlue: '#B0E0E6',   // Light Blue (Powder Blue)
            navyBlue: '#000080',     // Dark Blue (Navy Blue)
            turquoise: '#40E0D0',    // Soft Aqua (Turquoise)
            steelBlue: '#4682B4',    // Muted Blue (Steel Blue)
          },
        },
      },
      plugins: [],
    }
  