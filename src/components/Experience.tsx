import { Award, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "Vietnam Australia International School",
    location: "Ho Chi Minh City, Vietnam · On-site",
    position: "Data Administrator",
    period: "Feb 2024 - Feb 2025",
    achievements: [
      "Processed and managed data to ensure accuracy and integrity.",
      "Utilized Customer Relationship Management (CRM) systems to support data-related activities.",
      "Collaborated across departments to optimize data workflows."
    ]
  },
  {
    company: "UniTutor",
    location: "Ho Chi Minh City, Vietnam · Remote",
    position: "Statistics Tutor",
    period: "Nov 2023 - Dec 2024",
    achievements: [
      "Developed lesson plans and teaching materials tailored to students' needs.",
      "Used diverse teaching techniques to enhance learning and understanding of statistical probability.",
      "Improved communication and mentoring skills."
    ]
  },
  {
    company: "MCI Vietnam Consultant Joint Stock Company",
    location: "Ho Chi Minh City, Vietnam · Hybrid",
    position: "Data Analyst",
    period: "Oct 2024 - Feb 2024",
    achievements: [
      "Conducted customer segmentation to identify and analyze different customer groups.",
      "Performed market research to gather insights on industry trends, competitors, and market conditions.",
      "Created and maintained data visualizations to effectively communicate insights and support decision-making."
    ]
  },
  {
    company: "CI Research",
    location: "Ho Chi Minh City, Vietnam · Hybrid",
    position: "Data Processing Intern",
    period: "Apr 2023 - Jun 2023",
    achievements: [
      "Collected and analyzed data on consumers, competitors, and the market.",
      "Identified trends and provided actionable reports for clients or internal teams.",
      "Monitored and reported on market changes to guide strategic decisions."
    ]
  },
  {
    company: "Beloved & Beyond",
    location: "Ho Chi Minh City, Vietnam · Hybrid",
    position: "Data Analyst Intern",
    period: "Oct 2022 - Jan 2023",
    achievements: [
      "Collected, processed, and stored data for analysis and reporting.",
      "Collaborated with data scientists, business analysts, and stakeholders to align objectives.",
      "Presented insights and proposed data-driven solutions to teams and clients."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </span>
              </div>
              <p className="flex items-center text-gray-500 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <Award className="w-4 h-4 mr-2 mt-1 text-blue-500" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
