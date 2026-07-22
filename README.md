# NASA Mars Rover Photo Explorer (TypeScript + Express + EJS)

A modern, high-performance web application designed with **TypeScript**, **Express.js**, and **EJS** implementing the **UI/UX Pro Max** design system for exploring real-time surface photography sent back by NASA Mars Rovers (Perseverance, Curiosity, Opportunity, Spirit).

---

## 🚀 Key Features

- **TypeScript MVC Architecture:** Clean separation of concerns into `routes/`, `controllers/`, `services/`, `middleware/`, and `types/`.
- **UI/UX Pro Max Design System:** Deep space dark mode theme with starfield particle animations, glassmorphism cards, glowing buttons, and text gradient shimmers.
- **Dynamic Camera Filter:** Filter telemetry photos on-the-fly by specific camera instruments (FHAZ, RHAZ, NAVCAM, MAST, etc.).
- **Fullscreen Lightbox Modal:** Expand any photo into full resolution with metadata (Rover, Sol, Earth Date, Camera Name).
- **RoverCam Support Reference Table:** Interactive camera specs matrix with real-time text search filter.
- **Robust Error Handling & Input Validation:** Built-in `express-validator` and styled 404/500 fallback pages.

---

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "My Capstone Project-4- NASA ROVER Photo by NASA API"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (or copy `.env.example`):
   ```env
   APIKEY="YOUR_NASA_API_KEY_HERE"
   PORT=4000
   ```
   *(Get a free API key at [https://api.nasa.gov/](https://api.nasa.gov/) or use `DEMO_KEY`)*

---

## 💻 Available Scripts

- **Run in Development Mode (Live reload with TSX):**
  ```bash
  npm run dev
  ```

- **Build TypeScript to production JavaScript (`dist/`):**
  ```bash
  npm run build
  ```

- **Run Production Server:**
  ```bash
  npm start
  ```

---

## 📁 Project Structure

```text
├── src/
│   ├── server.ts               # Entry point
│   ├── app.ts                  # Express application configuration
│   ├── config/                 # Environment variables configuration
│   ├── types/                  # TypeScript interfaces (NasaPhoto, RoverName, etc.)
│   ├── services/               # NASA API integration service
│   ├── routes/                 # Express route definitions (home, search, pages)
│   ├── controllers/            # Route request controllers
│   └── middleware/             # Input validator & error handling middlewares
├── views/                      # Redesigned EJS Templates
│   ├── index.ejs               # Animated Space Hero & Search Form
│   ├── photos.ejs              # Photo Gallery Grid & Lightbox Modal
│   ├── camrover.ejs            # Rover Camera Specification Table & Filter
│   ├── about.ejs               # Mission Story & Telemetry Stats
│   ├── contact.ejs             # Transmission Form & Mars HQ Details
│   ├── error.ejs               # Custom 404 / 500 Lost in Space Page
│   └── partials/               # Shared Header, Navbar, & Footer
├── public/                     # Static assets & UI/UX Pro Max stylesheets
│   ├── styles/                 # main.css, photo.css, CamRover.css, about.css, contact.css
│   └── images/                 # Mars graphics & assets
├── dist/                       # Compiled production JS output
└── tsconfig.json               # TypeScript configuration
```
