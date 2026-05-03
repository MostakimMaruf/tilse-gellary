# 🧱 Tiles Gallery

A modern, responsive tile showcase web application built with **Next.js (App Router)** and **BetterAuth** authentication. Discover, explore, and find your perfect aesthetic tile from a curated gallery.

---

## 🌐 Live URL And Git Ripo

🔗 **[https://tiles-gallery-ebon.vercel.app/]**
🔗 **[https://github.com/MostakimMaruf/tilse-gellary]**


---

## 🎯 Purpose

Tiles Gallery is a full-stack web application. that allows users to browse a curated collection of tiles, search and filter by title, view detailed tile information, and manage their own profile — all within a secure, authenticated environment. 

---

## ✨ Key Features

- 🏠 **Home Page** with animated banner, scrolling marquee, and featured tiles section
- 🔐 **Authentication** via Email/Password and Google OAuth (powered by BetterAuth + MongoDB Adapter)
- 🖼️ **All Tiles Gallery** with real-time search functionality
- 🔍 **Single Tile Detail Page** with high-res preview and full specifications
- 👤 **My Profile** page with name and image URL update support
- 📱 **Fully Responsive** — works seamlessly on mobile, tablet, and desktop
- 🔒 **Protected Routes** for tile details and user profile
- ⏳ **Loading States** on all data-fetching operations
- 🚫 **Custom 404 Not Found** page
- 🎨 **Smooth Animations** using SwiperJS / Animate.css

---


## 📁 Project Structure

```
tiles-gallery/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── all-tiles/
│   ├── tile/
│   │   └── [id]/
│   ├── my-profile/
│   │   └── update/
│   ├── not-found.js
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── TileCard.jsx
│   └── ...
├── lib/
│   └── auth.js
├── public/
│   └── images/
├── .env.local
├── README.md
└── package.json
```

---

## 🔐 Route Permissions

| Route | Access |
|---|---|
| `/` | Public |
| `/all-tiles` | Public |
| `/login` | Public |
| `/register` | Public |
| `/tile/[id]` | 🔒 Private (Login required) |
| `/my-profile` | 🔒 Private (Login required) |
| `/my-profile/update` | 🔒 Private (Login required) |

---

## 📦 JSON Data Format

```json
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Premium ceramic tile with blue glaze finish",
  "image": "/images/tiles/tile_001.jpg",
  "category": "ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "inStock": true
}
```

---


## 🌍 Deployment

This project is deployed on **Vercel**. To deploy your own:

1. Push the project to GitHub
2. Import the repo on vercel
3. Add all environment variables in Vercel's dashboard
4. Deploy!


---



## 👤 Author

Mostakim Hasan Maruf

---

## 📄 License

This project is for academic purposes under assignment category **A8-Apple**...
