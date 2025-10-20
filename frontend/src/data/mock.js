// Portfolio data for Nikhil Agarwal

export const personalInfo = {
  name: "Nikhil Agarwal",
  title: "Advanced Application Systems Engineer",
  tagline: "Java Full Stack Developer specializing in AWS, AI, and building robust web applications",
  email: "nikhilagarwal.20.na@gmail.com",
  phone: "+91 98047 70368",
  location: "Bangalore, India",
  bio: "I'm a passionate Java Full Stack Developer currently working at Accenture with expertise in modern web technologies, AWS Security, and AI. With a strong foundation in Data Structures and Algorithms, I specialize in building scalable applications using Spring Boot, React, and cloud technologies. Beyond coding, I've led a 50-member dance team, managed performances for 10,000+ audiences, and secured 20+ medals in competitions.",
  resume: "/resume.pdf",
  heroImage: "https://images.unsplash.com/photo-1707528041466-83a325f01a3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzYwOTQ3NzUyfDA&ixlib=rb-4.1.0&q=85",
  aboutImage: "https://images.unsplash.com/photo-1634838872223-92ca3d20a927?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwY29kaW5nfGVufDB8fHx8MTc2MDk0Nzc2MXww&ixlib=rb-4.1.0&q=85"
};

export const socialLinks = {
  github: "https://github.com/nikhilagarwal",
  linkedin: "https://linkedin.com/in/nikhilagarwal",
  twitter: "https://twitter.com/nikhilagarwal",
  email: "mailto:nikhilagarwal.20.na@gmail.com"
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 75 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "GraphQL", level: 70 }
    ]
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 80 },
      { name: "Redis", level: 70 }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 75 },
      { name: "Jest", level: 80 },
      { name: "Webpack", level: 70 },
      { name: "Agile", level: 85 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1554098415-788601c80aef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzYwOTQ3NzU3fDA&ixlib=rb-4.1.0&q=85",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    github: "https://github.com/alexmorgan/ecommerce-platform",
    demo: "https://ecommerce-demo.example.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and analytics.",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzYwOTQ3NzU3fDA&ixlib=rb-4.1.0&q=85",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "https://github.com/alexmorgan/task-manager",
    demo: "https://tasks-demo.example.com",
    featured: true
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with data visualization, custom reports, and API integrations for business insights.",
    image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    github: "https://github.com/alexmorgan/analytics-dashboard",
    demo: "https://analytics-demo.example.com",
    featured: true
  },
  {
    id: 4,
    title: "Social Media API",
    description: "RESTful API for social media platform with authentication, posts, comments, and real-time notifications.",
    image: "https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
    github: "https://github.com/alexmorgan/social-api",
    demo: null,
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: [
      "Lead development of microservices architecture serving 1M+ users",
      "Mentored junior developers and conducted code reviews",
      "Reduced API response time by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    location: "San Francisco, CA",
    period: "2019 - 2021",
    description: [
      "Built and maintained multiple client-facing web applications",
      "Collaborated with design team to implement responsive UI/UX",
      "Integrated third-party APIs and payment gateways",
      "Participated in agile development and sprint planning"
    ]
  },
  {
    id: 3,
    type: "work",
    title: "Junior Developer",
    company: "StartUp Ventures",
    location: "Mountain View, CA",
    period: "2018 - 2019",
    description: [
      "Developed features for company's main product using React and Node.js",
      "Fixed bugs and improved application performance",
      "Wrote unit and integration tests",
      "Participated in daily standups and sprint retrospectives"
    ]
  },
  {
    id: 4,
    type: "education",
    title: "B.S. Computer Science",
    company: "University of California",
    location: "Berkeley, CA",
    period: "2014 - 2018",
    description: [
      "GPA: 3.8/4.0",
      "Focus: Software Engineering and Web Technologies",
      "Dean's List all semesters",
      "Senior Project: Real-time Collaboration Platform"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO at TechCorp Solutions",
    content: "Alex is an exceptional developer who consistently delivers high-quality work. Their technical expertise and problem-solving skills have been invaluable to our team.",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager at Digital Innovations",
    content: "Working with Alex was a pleasure. They have a great eye for detail and always deliver projects on time. Their communication skills make collaboration seamless.",
    avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=06b6d4&color=fff"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Lead Designer at CreativeHub",
    content: "Alex brings ideas to life with clean, efficient code. They understand the importance of user experience and always implement designs perfectly.",
    avatar: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=0ea5e9&color=fff"
  }
];
