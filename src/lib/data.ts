import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Sepehr Jokanian",
  title: "Computer Science (Artificial Intelligence) Graduate",
  subtitle: "",
  email: "sepehrjokanian99@gmail.com",
  linkedin: "https://www.linkedin.com/in/sepehr-jo",
  github: "https://github.com/sepehrjo",
  bio: "I am a recent Computer Science (AI) Graduate from Asia Pacific University of Technology & Innovation with a passion for AI/ML, Computer Vision, and NLP. My academic journey includes an award-winning Final Year Project.",
  academicInterests: [
    "Neural Networks & Deep Learning",
    "Computer Vision",
    "Natural Language Processing (NLP)",
    "Generative AI and Large Language Models",
    "Prompt Engineering for AI Systems",
  ],
};

export const education = [
  {
    degree: "Bachelor of Computer Science (Artificial Intelligence)",
    institution: "Asia Pacific University of Technology & Innovation",
    year: "2022-2025",
    details: [
      "Final Year Project: \"Developing an Artificial Intelligence System for Cyberbully Detection and Enhancing Safety on Online Forums\"",
      "Grade: A+ (Selected to compete among university's outstanding projects)",
    ],
  },
  {
    degree: "Diploma in Mathematics and Physics",
    institution: "Shahid Ayatollah Dastgheib High School",
    year: "2012-2016",
    details: ["CGPA: 3.80 (19.06/20)"],
  },
];

export const experience = [
  {
    role: "AI Developer Intern",
    company: "",
    year: "Internship",
    description: "Developed and implemented a chatbot for the websites to enhance user interaction and support.",
    skills: ["AI Development", "Chatbot Implementation", "User Experience Design"],
  },
];

export const publications = [
  {
    title: "Developing an artificial intelligence system for cyberbully detection and enhancing safety on online forums",
    authors: "Jokanian, S., Alizadeh, S.",
    journal: "Manuscript under preparation for publication, 2026",
    status: "In Preparation",
    link: null,
  },
  {
    title: "Overcoming bushfire challenges via machine learning techniques and enhanced training data in Australia",
    authors: "Jokanian, S., Esmaeil Zadeh, N.",
    journal: "Manuscript submitted to Natural Hazards (Springer Nature), December 2025",
    status: "Submitted",
    link: null,
  },
  {
    title: "Application of machine learning for the prediction and management of non-communicable diseases",
    authors: "Jokanian, S.",
    journal: "Journal of Applied Technology and Innovation (JATI), 8(4), 28–35, 2024",
    status: "Published",
    link: "https://jati.sites.apiit.edu.my/wp-content/uploads/sites/11/2024/11/Volume8_Issue4_Paper5_2024_28-35.pdf",
  },
];

export const projects = [
  {
    title: "Cyberbullying Detection System",
    year: "2025",
    tech: ["Python", "NLP", "TensorFlow", "PyTorch"],
    description: "Automated abusive language detection with 92% accuracy using cross-entropy loss and Adam optimizer.",
    featured: true,
    images: [
      {
        src: "/projects/cyberbullying/cyberbully-main-showcase.png",
        alt: "Complete System Overview - Chrome Extension + AI Dashboard",
        caption: "Complete System Overview - Chrome Extension + AI Dashboard",
      },
      {
        src: "/projects/cyberbullying/slide-2-extension.png",
        alt: "Real-time Detection on Reddit - 92% Accuracy",
        caption: "Real-time Detection on Reddit - 92% Accuracy",
      },
      {
        src: "/projects/cyberbullying/slide-3-dashboard-guide.png",
        alt: "Moderator Dashboard - Flagged Comments Management",
        caption: "Moderator Dashboard - Flagged Comments Management",
      },
      {
        src: "/projects/cyberbullying/slide-4-flagged-content.png",
        alt: "Confidence Scores & Action Controls",
        caption: "Confidence Scores & Action Controls",
      },
    ],
  },
  {
    title: "Face Mask Detection Enhancement",
    year: "2025",
    tech: ["AI/ML", "Computer Vision", "CNNs"],
    description: "Enhanced real-time face mask detection system with Convolutional Neural Networks and real-time inference optimizations.",
  },
  {
    title: "SMS Spam Detection System",
    year: "2025",
    tech: ["Python", "Machine Learning"],
    description: "Built end-to-end pipeline with TF-IDF feature extraction, Naive Bayes/SVM experiments.",
  },
  {
    title: "Handwriting Detection System",
    year: "2025",
    tech: ["MATLAB", "Image Processing"],
    description: "Implemented image processing algorithms and evaluated OCR performance on handwritten samples.",
  },
  {
    title: "Car Price Prediction System",
    year: "2025",
    tech: ["Python", "AI", "Regression Models"],
    description: "Developed regression-based models with feature engineering to predict car prices.",
  },
  {
    title: "Language Learning App",
    year: "2024",
    tech: ["Flutter", "Dart"],
    description: "Cross-platform UI with interactive lessons, quizzes, and progress tracking on admin panel.",
  },
  {
    title: "Data Factorization",
    year: "2024",
    tech: ["R Programming"],
    description: "Applied PCA/SVD/NMF techniques for dimensionality reduction and factor analysis.",
  },
  {
    title: "Hostel Visitor System",
    year: "2024",
    tech: ["Java EE", "HTML", "CSS", "Servlets"],
    description: "Enterprise backend services with session management and role-based access.",
  },
  {
    title: "E-Library Data Management System",
    year: "2023",
    tech: ["SQL"],
    description: "Database design, normalization, and complex query implementation.",
  },
  {
    title: "Trivia Pursuit Card Game",
    year: "2023",
    tech: ["C++"],
    description: "Game logic, scoring system, and random question generation.",
  },
];

export const skills = {
  languages: [
    { name: "Python", level: "High" },
    { name: "SQL", level: "High" },
    { name: "Java", level: "High" },
    { name: "C++", level: "Medium" },
    { name: "C", level: "Medium" },
    { name: "R Programming", level: "Medium" },
    { name: "MATLAB", level: "Low" },
    { name: "Flutter/Dart", level: "Medium" },
    { name: "HTML/CSS", level: "Low" },
  ],
  frameworks: [
    "TensorFlow",
    "PyTorch",
    "Computer Vision",
    "Natural Language Processing",
    "Generative AI",
    "Deep Learning",
  ],
  courses: [
    "Generative AI",
    "Deep Learning for Healthcare",
    "Computer Vision App with Azure",
    "Google Analytics",
  ],
};

export const certifications = {
  pte: {
    overall: 69,
    listening: 73,
    speaking: 65,
    writing: 65,
    reading: 72,
  },
};

export const references = [
  {
    name: "Shahab Alizade",
    position: "Lecturer of Computing Faculty",
    institution: "Asia Pacific University",
  },
  {
    name: "Zailan Arabee Abdul Salam",
    position: "Senior Lecturer of Computing Faculty",
    institution: "Asia Pacific University",
  },
];

export const socialLinks = [
  { name: "LinkedIn", url: personalInfo.linkedin, icon: Linkedin },
  { name: "GitHub", url: personalInfo.github, icon: Github },
  { name: "Email", url: `mailto:${personalInfo.email}`, icon: Mail },
];
