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
    category: "Frontend Development",
    items: [
      { name: "ReactJs", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 90 },
      { name: "REST APIs", level: 85 }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Spring Framework", level: 85 },
      { name: "PHP", level: 75 },
      { name: "MySQL", level: 80 }
    ]
  },
  {
    category: "Cloud & AI Technologies",
    items: [
      { name: "AWS Security", level: 80 },
      { name: "AI & Machine Learning", level: 75 },
      { name: "5G & Edge Computing", level: 70 },
      { name: "Cryptographic Computing", level: 70 }
    ]
  },
  {
    category: "Core Skills & Tools",
    items: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "OOPs", level: 90 },
      { name: "Database Management", level: 85 },
      { name: "Unit Testing", level: 80 },
      { name: "Problem Solving", level: 90 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "StockPulse: Data Driven Market Insights",
    description: "Developed a comprehensive stock price forecasting web application using advanced machine learning models. Compared GAN models with LSTM and GRU architectures, analyzing COVID-19's impact on prediction accuracy. Built a trader-focused platform featuring company information, technical analysis tools, and price forecasts.",
    image: "https://images.unsplash.com/photo-1554098415-788601c80aef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzYwOTQ3NzU3fDA&ixlib=rb-4.1.0&q=85",
    technologies: ["Python", "JavaScript", "GAN", "LSTM", "GRU", "Machine Learning"],
    github: "https://github.com/nikhilagarwal/stockpulse",
    demo: null,
    featured: true
  },
  {
    id: 2,
    title: "Network Device Management System",
    description: "Built during internship at L&T-SWC - a comprehensive website integrating open-source maps with interactive markers and clusters for network devices. Implemented secure user authentication with signup, login, and logout functionality, focusing on optimal user experience and REST API integration.",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzYwOTQ3NzU3fDA&ixlib=rb-4.1.0&q=85",
    technologies: ["PHP", "MySQL", "JavaScript", "REST APIs", "Axios"],
    github: "https://github.com/nikhilagarwal/network-device-mgmt",
    demo: null,
    featured: true
  },
  {
    id: 3,
    title: "Official Website for Team UAV",
    description: "Collaborated with a 10-member team during lockdown to develop the official website for Team UAV. Created a modern, responsive website showcasing team achievements, projects, and member profiles using core web technologies.",
    image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nikhilagarwal/team-uav-website",
    demo: null,
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Advanced Application Systems Engineer",
    company: "Accenture",
    location: "Bangalore, India",
    period: "Oct 2024 - Present",
    description: [
      "Completed comprehensive Java Full Stack Development training",
      "Gained hands-on experience with unit testing frameworks to ensure code quality and reliability",
      "Working on enterprise-level applications using Spring Boot and React",
      "Collaborating with cross-functional teams to deliver high-quality solutions"
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Advanced Systems Engineer",
    company: "Accenture",
    location: "Bangalore, India",
    period: "Jun 2023 - Jul 2023",
    description: [
      "Gained hands-on experience with AWS Security, including creating and managing ACLs and subnets",
      "Acquired foundational knowledge of AI, 5G, Edge Computing, and Cryptographic Computing",
      "Worked on cloud infrastructure security and optimization",
      "Participated in technical training sessions and knowledge sharing"
    ]
  },
  {
    id: 3,
    type: "work",
    title: "Software Developer Intern",
    company: "L&T-SWC",
    location: "Bengaluru, India",
    period: "May 2022 - Jul 2022",
    description: [
      "Developed a website integrating open-source maps with markers and clusters for network devices",
      "Implemented user authentication features including signup, login, and logout with focus on user experience",
      "Utilized REST APIs (Axios) to enhance project usability",
      "Collaborated with senior developers on production-level features"
    ]
  },
  {
    id: 4,
    type: "education",
    title: "B.Tech Computer Science and Engineering",
    company: "Vellore Institute of Technology",
    location: "Vellore, India",
    period: "Jul 2020 - Aug 2024",
    description: [
      "CGPA: 8.71/10",
      "Focus: Full Stack Development, Data Structures & Algorithms, Cloud Computing",
      "Team Head of Bollywood Badmash Company (VIT Dance Club) - Led 50-member team",
      "Achieved multiple inter-college victories and secured 20+ medals in competitions"
    ]
  },
  {
    id: 5,
    type: "education",
    title: "Science + Computer (ISC)",
    company: "Don Bosco School Park Circus",
    location: "Kolkata, India",
    period: "May 2018 - May 2020",
    description: [
      "Score: 94.75%",
      "Indian School Certificate Examinations (ISC)",
      "Strong foundation in Computer Science and Mathematics",
      "Active participant in coding competitions and tech events"
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
