<div dir="ltr">

# 🛒 Digikala Clone

A front-end clone of [Digikala](https://www.digikala.com) — Iran's largest e-commerce platform — built as a practice project to replicate its core UI/UX with modern React tooling and full RTL/Persian support.

---

## ✨ Features

- 🗂️ **Category Navigation** — Dynamic category bar with icons loaded from a local JSON data source
- 🌐 **RTL Layout** — Full right-to-left support tailored for Persian (Farsi) UI
- 📱 **Responsive Design** — Optimized for both mobile and desktop viewports
- 🎠 **Swiper Carousels** — Smooth, touch-friendly sliders for banners and product sections
- 🔀 **Client-side Routing** — Multi-page navigation using React Router

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [DaisyUI](https://daisyui.com) | Component library |
| [Swiper](https://swiperjs.com) | Touch sliders & carousels |
| [React Router](https://reactrouter.com) | Client-side routing |
| [Vite](https://vitejs.dev) | Build tool & dev server |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/
│   │   └── CategoryNav.jsx     # Dynamic category navigation bar
│   └── ...
├── pages/
│   └── Home.jsx
├── App.jsx
└── main.jsx

public/
├── assets/
│   └── images/
│       └── Header/
│           └── mobile/         # Category icons
└── db.json                     # Local mock data source
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/digikala-clone.git

# Navigate into the project
cd digikala-clone

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🗂️ Data Source

Product and category data is served from a local `db.json` file located in the `public/` directory. No external API calls are required to run the project.

---

## 📸 Screenshots

> *Coming soon*

---

## 📌 Notes

- This project is built purely for **educational and portfolio purposes**.
- It is not affiliated with or endorsed by Digikala.
- All brand assets (logos, icons, etc.) belong to their respective owners.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

</div>
