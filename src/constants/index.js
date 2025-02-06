export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Achievements',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Aryan Sharma',
    position: 'team member',
    img: 'assets/aaryan.png',
    review:
      'Working with Awais was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Noaman Hakim',
    position: 'team member',
    img: 'assets/noaman1.png',
    review:
      'Awais’s expertise in web development is exceptional. He delivered a robust and scalable solution for our e-commerce project showcasing impressive problem-solving skills. His ability to integrate complex features within tight deadlines was remarkable.',
  },
];

export const myProjects = [
  {
    title: 'Twyster - Social Media Platform',
    desc: 'Twyster is a MERN stack-based social media app modeled after Twitter, featuring posting, liking, following, comments, and personalized profiles. It supports real-time updates, theme-changing, and responsive design using Tailwind CSS.',
    subdesc:
      'Built with React.js, Node.js, Express.js, and MongoDB, Twyster is a full-stack project that showcases my skills in frontend and backend development. It is a great starting point for anyone looking to build a social media platform.',
    href: 'https://twyster-app-1.onrender.com/',
    texture: '/textures/project/twyster.mp4',
    logo: '/assets/logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Workify - Project Management Platform',
    desc: 'Workify is a Next.js-powered collaborative project management app with workspaces, tasks, Kanban boards, real-time updates, and role-based access. Features calendar views, analytics, and mobile-friendly design.',
    subdesc: 
      'Built with Next.js 14, Hono.js, and Appwrite, Workify demonstrates full-stack proficiency in modern web development. Ideal for teams seeking organized task management with real-time collaboration.',
    href: 'https://workify-three.vercel.app/',
    texture: '/textures/project/workify.mp4',
    logo: '/assets/Icon.png',
    logoStyle: {
      backgroundColor: '#1E293B', // slate-800
      border: '0.2px solid #334155', // slate-700
      boxShadow: '0px 0px 60px 0px rgba(99, 102, 241, 0.3)', // indigo glow
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Appwrite',
        path: '/assets/appwrite.png',
      },
    ],
  },
  {
    title: 'Snyppit - SaaS Code Editor',
    desc: 'Snyppit is a feature-rich code editor and runner, built with React, Next.js, and Monaco Editor. It provides a seamless environment for writing, testing, and executing code in multiple languages, language-specific settings, and real-time output.',
    subdesc:
      'Built with React, Next.js, TypeScript, and Monaco Editor, Snyppit is code editor and runner that leverages Zustand for state management and integrates a serverless API for seamless code execution.',
    href: 'https://snyppit-beta.vercel.app/',
    texture: '/textures/project/snyppit.mp4',
    logo: '/assets/logo2.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'First Internship',
    pos: 'AI/ML Intern',
    duration: 'November 2023',
    title: "During my one-month internship at InternPe, I worked on AI and machine learning projects, applying advanced algorithms to real-world problems and improving my skills in data analysis, model development, and predictive analytics.",
    icon: '/assets/internpe.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Twyster : Final-Year Project',
    pos: 'Web Developer',
    duration: 'September 2024',
    title: "I built Twyster, a Twitter-inspired platform, using the MERN stack and Tailwind CSS. With features like real-time updates and user authentication, it enhanced my full-stack skills and demonstrated my ability to deliver complete applications.",
    icon: '/assets/logo1.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'MumbaiHacks 2024',
    pos: 'Project Manager',
    duration: 'October 2024',
    title: "As a project manager of my team at MumbaiHacks 2024, I led a team of developers to create a financial advisor bot with features like personalized investment recommendations, budgeting assistance, and real-time financial tracking.",
    icon: '/assets/favicon2.png',
    animation: 'salute',
  },
];
