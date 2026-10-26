# Neumatec Frontend

Modern frontend application configured with **React 19**, **Tailwind CSS v4**, and **Vite**.

---

## 🚀 Quick Start

From the `Frontend` directory:

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start local development server with HMR
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🛠️ Tech Stack & Architecture

- **React 19 (`react`, `react-dom`)**: Modern declarative component model.
- **Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`)**: CSS-first high-speed styling engine seamlessly integrated into Vite without needing a legacy `tailwind.config.js`.
- **Vite 8**: Ultra-fast build tool and local dev server with instant Hot Module Replacement (HMR).
- **Lucide React (`lucide-react`)**: Modern SVG icon toolkit.

---

## 📁 Project Structure

```
Frontend/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, logos, SVG files
│   ├── components/      # Reusable UI components
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application custom CSS
│   ├── index.css        # Tailwind CSS v4 entrypoint (@import "tailwindcss";)
│   └── main.jsx         # React application root DOM mount
├── index.html           # HTML template with Google Fonts (Plus Jakarta Sans)
├── package.json         # Scripts and project dependencies
└── vite.config.js       # Vite configuration with @tailwindcss/vite plugin
```

---

## 🎨 Styling with Tailwind CSS v4

Tailwind CSS v4 uses modern CSS rules directly imported in `src/index.css`:
```css
@import "tailwindcss";
```

All standard Tailwind utility classes (e.g. `flex`, `grid`, `bg-slate-950`, `text-cyan-400`, `rounded-2xl`, `backdrop-blur-md`) work out of the box with instant compilation.
