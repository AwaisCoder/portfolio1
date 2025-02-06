# 3D Web Developer Portfolio 🚀

A modern, immersive portfolio website built with React.js and Three.js, featuring interactive 3D elements and smooth animations. Stand out from the crowd with this unique showcase of your development skills and projects.

## ⚙️ Tech Stack

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [React.js](https://reactjs.org/) - Frontend library
- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - React renderer for Three.js
- [React Three Drei](https://drei.pmnd.rs/) - Useful helpers for React Three Fiber
- [Email JS](https://www.emailjs.com/) - Email delivery platform
- [Vite](https://vitejs.dev/) - Frontend build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 🔋 Features

- **🎮 Immersive Hero Section**
  - Interactive 3D hacker room scene
  - Mouse-movement responsive animations
  - Animated mini-models surrounding the main scene

- **👤 Interactive About Me**
  - Modern bento grid layout
  - Interactive 3D globe showing location
  - Animated tech stack icons
  - One-click email copy functionality

- **💼 Dynamic Project Showcase**
  - Live project demos inside 3D computer model
  - Smooth transitions between projects
  - Interactive project navigation

- **📈 Experience Timeline**
  - Interactive 3D animations for each milestone
  - Hover-triggered events
  - Visual representation of career progression

- **🤝 Client Testimonials**
  - Dedicated feedback section
  - Client success stories
  - Professional endorsements

- **📬 Contact Form**
  - EmailJS integration
  - User-friendly interface
  - Real-time form validation

- **🎨 Additional Features**
  - Clean, minimalist footer design
  - Integrated social media links
  - Fully responsive design
  - Optimized performance
  - Code splitting and lazy loading

## 🛠️ Installation & Set Up

1. Clone the repository

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Edit `.env` with your credentials:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_SERVICE_ID=your_service_id
```

4. Start the development server
```bash
npm run dev
```

## 📁 Project Structure

```
portfolio-3d/
├── src/
│   ├── assets/         # Static assets (3D models, images)
│   ├── components/     # Reusable components
│   ├── constants/      # Configuration and constants
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Layout components
│   ├── models/        # 3D model components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles and Tailwind config
│   └── utils/         # Utility functions
├── public/            # Public assets
└── vite.config.js     # Vite configuration
```

## ✨ Code Quality

- ESLint configuration for code consistency
- Prettier for code formatting
- Husky for pre-commit hooks
- Type checking with PropTypes

## 📱 Responsive Design

- Desktop (1024px and above)
- Tablet (768px - 1024px)
- Mobile (below 768px)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Three.js community for amazing resources
- React Three Fiber team for the excellent documentation
- All contributors who have helped improve this project

---
⭐️ Star this repo if you find it helpful!