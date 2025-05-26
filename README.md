# 🌍 Holidaze – Venue Booking Platform

Holidaze is a full-stack venue booking web application where users can explore, book, and manage accommodations, while venue managers can list and manage their properties.

## 🚀 Live Site

🔗 [View Deployed App on Netlify](https://your-holidaze-site.netlify.app)

> ⚠️ **Note:** The deployed version currently has a styling/configuration issue related to Tailwind CSS. The core functionality and routing are in place, and the issue is being actively resolved.

---

## 📦 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **API:** Noroff Holidaze API (v2)
- **Auth:** Noroff API - Register/Login endpoints
- **Deployment:** Netlify

---

## ✨ Features

### Users (Guests)

- Browse and search available venues
- View accommodation details
- Book venues by date and number of guests
- Create a user account (with Noroff student email)
- View profile and bookings

### Venue Managers

- Register as a Venue Manager
- Add/edit/delete venues
- View bookings for owned venues (Admin dashboard)

---

## 🛠️ Known Issues (To Be Fixed)

- ❌ Tailwind CSS currently not applied due to PostCSS config issues
- ❌ Some components may render without full styles or spacing
- ✅ Routing, data fetching, and forms are functional
- 🛠️ Fix planned for tomorrow: `postcss.config.js` and Tailwind reset

---

## 📁 Getting Started (Local)

```bash
git clone https://github.com/YOUR_USERNAME/holidaze.git
cd holidaze
npm install
npm run dev
```
