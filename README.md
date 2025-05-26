# 🌍 Holidaze – Venue Booking Platform

**Holidaze** is a responsive venue booking web application built using React and Tailwind CSS. It allows users to browse, book, and manage accommodations, while venue managers can register properties and oversee bookings.

---

## 🚀 Live Demo

🔗 [View Deployed App on Netlify](https://sunny-holidaze.netlify.app/)

---

## 📦 Tech Stack

- **Frontend Framework:** React (with Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** Local state/hooks
- **API:** Noroff Holidaze API (v2)
- **Auth:** Noroff API – Register/Login with token-based auth
- **Deployment:** Netlify

---

## ✨ Features

### 👥 Guests (Customers)
- 🔍 Browse and search available venues
- 📆 View accommodation details with availability calendar
- 📝 Book venues (select dates, number of guests)
- 👤 Register and log in
- 📄 View personal bookings
- 🖼️ Update avatar/profile

### 🧑‍💼 Venue Managers
- 🛠️ Register as a venue manager
- 🏠 Add, edit, and delete venues
- 📅 View upcoming bookings for managed venues
- 🖼️ Update avatar/profile

---

## 🧪 Testing

- ✅ All user stories tested manually
- ✅ Validated HTML with [W3C Validator](https://validator.w3.org/)
- ✅ Accessibility tested with [WAVE Tool](https://wave.webaim.org/)
- ✅ Performance and SEO tested using Lighthouse

---

## 🛠️ Known Issues

- ❌ Tailwind CSS may not render correctly on first build (PostCSS issue under review)
- ✅ All routes, API requests, and form submissions are functional
- 🛠️ Style rendering issue fix planned (check `postcss.config.js` and ensure Tailwind base import)

---

## 🖥️ Screenshots

> *(Add screenshots of the following for visual confirmation)*

- Home Page
- Venue Details (with Calendar)
- Booking Page
- Admin Dashboard

---

## 📁 Folder Structure

src
/components # Reusable UI components
/pages # Page-level React components
/services # API interaction modules
/hooks # Custom React hooks
main.jsx # Entry point
App.jsx # Main layout and router


---

## 🧭 Project Planning

- 📌 [Kanban Board (Trello/GitHub Projects)](https://your-kanban-board-link)
- 📅 [Gantt Chart (GitHub Roadmap/other)]( https://github.com/users/synthiab1997/projects/12)

---

## 🎨 Design & UI

- 🎨 [Figma Style Guide](https://www.figma.com/files/project/390243476)
- 📱 [Figma Desktop & Mobile Designs](https://www.figma.com/files/project/390243476)

---

## 🧰 Getting Started (Local Setup)

```bash
# Clone the repository
git clone https://github.com/synthiab1997/Holidaze.git
cd holidaze

# Install dependencies
npm install

# Start the dev server
npm run dev


📝 License
This project is for educational purposes only. Developed as part of the FED2 exam project brief at Noroff.
