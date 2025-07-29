# 🌟 Modern Dark Portfolio

A stunning, interactive portfolio website built with React, TypeScript, Three.js, and Framer Motion. Features a sleek dark theme with smooth animations, 3D elements, and responsive design.

## ✨ Features

- **🎨 Modern Dark Design**: Full black theme with white text and elegant gradients
- **🌟 3D Interactive Elements**: Three.js background with floating particles and geometries
- **🚀 Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **📱 Fully Responsive**: Mobile-first approach with seamless breakpoints
- **⚡ Lightning Fast**: Built with Vite for optimal performance
- **🎯 Interactive Components**: Hover effects, scroll animations, and smooth navigation
- **🔧 Type Safe**: Full TypeScript implementation
- **📧 Contact Form**: Functional contact form with backend integration

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **3D Graphics**: Three.js with React Three Fiber (@react-three/fiber)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: React Intersection Observer

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jadonaman/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio in action!

### Build for Production

```bash
npm run build
npm run preview  # Preview production build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx              # About section with skills showcase
│   ├── Background3D.tsx       # Three.js 3D background effects
│   ├── Contact.tsx            # Contact form with API integration
│   ├── Education.tsx          # Education timeline
│   ├── FloatingElements.tsx   # 3D floating animations
│   ├── Hero.tsx              # Landing hero section
│   ├── Hero3D.tsx            # 3D hero elements
│   ├── MouseFollower.tsx     # Interactive mouse follower
│   ├── Navigation.tsx        # Responsive navigation bar
│   ├── Projects.tsx          # Projects showcase gallery
│   ├── ScrollAnimation.tsx   # Scroll-triggered animations
│   ├── Skills.tsx           # Technical skills display
│   └── Typewriter.tsx       # Typewriter text effects
├── assets/                   # Static assets
├── App.tsx                  # Main application component
├── index.css               # Global styles and Tailwind
└── main.tsx               # Application entry point
```

## 🎨 Customization

### Update Content

1. **Personal Info**: Edit `Hero.tsx` for name, title, and bio
2. **Skills**: Modify `Skills.tsx` and `About.tsx` for your expertise
3. **Projects**: Update `Projects.tsx` with your real projects
4. **Contact**: Configure `Contact.tsx` with your contact details
5. **Education**: Edit `Education.tsx` for your academic background

### Styling

- **Colors**: Customize in `tailwind.config.js`
- **Animations**: Modify Framer Motion variants in components
- **3D Elements**: Adjust Three.js settings in `Background3D.tsx`

### Assets

Replace placeholder images in:
- `public/images/projects/` - Project screenshots
- `public/resume.pdf` - Your resume file
- `public/favicon.svg` - Site favicon

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large**: > 1280px

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌟 Performance Features

- ⚡ **Lazy Loading** - Components load on demand
- 🎯 **Optimized 3D** - Efficient Three.js rendering
- 🚀 **Tree Shaking** - Unused code elimination
- 📦 **Asset Optimization** - Compressed images and fonts
- 🔄 **Code Splitting** - Dynamic imports for better loading

## 🛡️ Security Features

- 🔒 **Input Validation** - Client-side form validation
- 🛠️ **Type Safety** - Full TypeScript coverage
- 🌐 **CORS Ready** - Proper API configuration
- 🔐 **Environment Variables** - Secure configuration management


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Features Showcase

### Dark Theme Design
- Pure black background (#000000) with white text
- Subtle gradients and glowing effects
- Consistent dark UI components

### 3D Interactions
- Floating geometric shapes
- Interactive mouse movements
- Smooth camera transitions
- Particle systems

### Smooth Animations
- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover micro-interactions
- Loading states

### Professional Layout
- Clean typography hierarchy
- Responsive grid systems
- Mobile-optimized navigation
- Accessibility compliant

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔗 Connect

- **Live Demo**: https://genesisoftwares.com/
- **LinkedIn**: https://www.linkedin.com/in/jadonaman/
- **GitHub**: https://github.com/JadonAman
- **Email**: Iasamanjadon@gmail.com

---

⭐ **Star this repository if it helped you build an amazing portfolio!**
