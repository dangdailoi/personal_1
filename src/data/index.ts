import type { Project, Award, Experience, Education, Certification } from '../types';

export const projects: Project[] = [
  {
    title: "Product Recommendation System",
    description: "Developed an e-commerce recommendation system to personalize user experience by integrating Deep Learning and Reinforcement Learning techniques.",
    image: "https://files.realpython.com/media/Build-a-Recommendation-Engine-With-Collaborative-Filtering_Watermarked.451abc4ecb9f.jpg",
    technologies: ["Python", "Flask", "TensorFlow", "FAISS", "PostgreSQL"],
    githubUrl: "https://github.com/dangdailoi/Recommendation-System",
    // liveUrl: "https://ecommerce-demo.com"
  },
  {
    title: "Sentiment Analysis",
    description: "The Sentiment Analysis application is a project for analyzing sentiments in restaurant reviews using Python and Flask. The application allows users to input text, analyze the sentiment, and display an image corresponding to the analysis result.",
    image: "https://github.com/dangdailoi/SentimentAnalysis/raw/main/static/giaodien.png",
    technologies: ["Python", "Data Analysis", "Natural Language Processing", "Data Visualization"],
    githubUrl: "https://github.com/dangdailoi/SentimentAnalysis",
    // liveUrl: "https://ecommerce-demo.com"
  },
  {
    title: "Smart Trash: Waste Classification using Computer Vision",
    description: "Computer Vision Interface: A user-friendly web application that integrates the deep learning model. Users can simply upload waste images or capture them directly through the webcam, and the system will instantly provide the corresponding waste category.",
    image: "https://www.mdpi.com/sustainability/sustainability-14-10226/article_deploy/html/images/sustainability-14-10226-g003.png",
    technologies: ["Python", "Computer Vision", "Project Management"],
    // githubUrl: "https://github.com/dangdailoi/SentimentAnalysis",
    // liveUrl: "https://ecommerce-demo.com"
  }
];

export const awards: Award[] = [
  {
    title: "Scientific research - UEH500 excellent subject award",
    organization: "University Of Economics Ho Chi Minh City",
    date: "2023",
    description: "Research on electronic money transfers in the current context of Vietnam and customer reactions"
  },
  {
    title: "Runner-up in the Biztech Hackathon competition",
    organization: "Issued by UII - UEH Institute of Innovation",
    date: "2022",
    description: "The waste sorting project, employing computer vision technology, was accomplished within a span of 28 hours."
  }
];

export const experiences: Experience[] = [
  {
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    position: "Senior Frontend Developer",
    period: "2020 - Present",
    achievements: [
      "Led a team of 5 developers in rebuilding the company's main product interface",
      "Improved application performance by 40% through code optimization",
      "Implemented automated testing resulting in 80% test coverage"
    ]
  },
  // ... other experiences
];

export const education: Education[] = [
  {
    institution: "University of Economics Ho Chi Minh City",
    degree: "Bachelor of Science",
    field: "Data Science",
    year: "2022",
    achievements: [
      "Thesis: Optimizing User Experience through a Product Recommendation System Based on DL and RL",
      "GPA: 3.2/4.0",
      "Sentiment Analysis Application"
    ]
  },
  {
    institution: "University of Economics Ho Chi Minh City",
    degree: "Bachelor of Business",
    field: "Marketing",
    year: "2020",
    achievements: [
      "Thesis: Service Improvement Proposal Based on Student Satisfaction at MCI Vietnam Academy",
      "GPA: 3.1/4.0",
      "Volunteer Staff: Youth Union - International Business and Marketing Faculty",
      "Military Semester: Company Commander"
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: "Python Certificate",
    organization: "HackerRank",
    date: "2024",
    credentialId: "d1dd82b045c1",
    verifyLink: "https://www.hackerrank.com/certificates/iframe/d1dd82b045c1"
  },
  {
    name: "SQL (Advanced) Certificate",
    organization: "HackerRank",
    date: "2024",
    credentialId: "4d103546a615",
    verifyLink: "https://www.hackerrank.com/certificates/iframe/4d103546a615"
  },
  {
    name: "Unilever Digital Marketing Analyst Specialization",
    organization: "Unilever",
    date: "2024",
    credentialId: "T5FC5L6R4JLT",
    verifyLink: "https://www.coursera.org/account/accomplishments/specialization/T5FC5L6R4JLT"
  },
  {
    name: "IBM Data Analyst Professional Certificate",
    organization: "IBM",
    date: "2024",
    credentialId: "7RXBQVHSPESJ",
    verifyLink: "https://www.coursera.org/account/accomplishments/records/7RXBQVHSPESJ"
  },
  {
    name: "IC3 Digital Literacy Certification",
    organization: "IIG Vietnam",
    date: "2022",
    credentialId: "null",
  },
  {
    name: "Applied Data Analysis for Decision Making",
    organization: "VOCO Center",
    date: "2023",
    credentialId: "null",
    verifyLink: "https://drive.google.com/file/d/1j4fJ7lJueEVZjrB7fvcUzIc7P16bGDzz/view?usp=sharing"
  }
];