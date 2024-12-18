import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
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

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
                <span className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.year}
                </span>
              </div>
              <p className="flex items-center text-gray-500 mb-4">
                <GraduationCap className="w-4 h-4 mr-2" />
                {edu.field}
              </p>
              <ul className="space-y-2">
                {edu.achievements.map((achievement, i) => (
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