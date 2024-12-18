import { CheckCircle } from 'lucide-react';

const skills = {
  tools: [
    "SQL", "Python", "R", "C++", 
    "Microsoft Excel", "Microsoft Power BI", 
    "Google Data Studio", "IBM SPSS Statistics"
  ],
  professional: [
    "Machine Learning", 
    "Natural Language Processing", 
    "Computer Vision", 
    "A/B Testing", "Market Research", 
    "Market Segmentation",
    "Statistics", "Data Processing", 
  ],
  soft: [
    "Teamwork", "Problem Solving", 
    "Communication", "Active Listening", 
    "Collaboration"
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Tools</h3>
            <div className="space-y-2">
              {skills.tools.map((tool) => (
                <div key={tool} className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
            <div className="space-y-2">
              {skills.professional.map((skill) => (
                <div key={skill} className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="space-y-2">
              {skills.soft.map((skill) => (
                <div key={skill} className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-500" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
