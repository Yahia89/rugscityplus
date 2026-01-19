# Rugs City Plus - Premium Coming Soon Landing Page

A luxurious, modern coming soon landing page built with React, Vite, and Tailwind CSS. Features smooth animations, countdown timer, and premium design elements.

## ✨ Features

- **Modern Design**: Premium dark theme with gradient accents
- **Smooth Animations**: Framer Motion animations throughout
- **Countdown Timer**: Real-time countdown to launch date
- **Responsive**: Fully responsive design for all devices
- **Newsletter Signup**: Email capture with validation
- **Performance**: Optimized with Vite for fast loading
- **Accessibility**: Semantic HTML and ARIA labels

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
rugscityplus/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Main hero section with countdown
│   │   ├── Features.jsx      # Features showcase
│   │   ├── Newsletter.jsx    # Email signup form
│   │   └── Footer.jsx        # Footer with links
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
└── package.json              # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `primary`: Main background color
- `secondary`: Secondary background
- `accent`: Primary accent (red/pink)
- `gold`: Secondary accent

### Fonts
- Display: Playfair Display (headings)
- Body: Inter (text)

### Countdown Date
Update the target date in `src/components/Hero.jsx`:
```javascript
const targetDate = new Date('2026-03-01').getTime()
```

## 🛠️ Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **PostCSS**: CSS processing

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/rugscityplus/',
  // ... rest of config
})
```

## 📝 License

ISC

## 👨‍💻 Author

Rugs City Plus Team

---

Built with ❤️ for luxury rug enthusiasts
