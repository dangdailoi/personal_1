import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Section } from './common/Section';
import { Card } from './common/Card';
import { IconButton } from './common/IconButton';

const certifications = [
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

export function Certifications() {
  return (
    <Section 
      id="certifications" 
      title="Certifications"
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <Card key={index}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{cert.name}</h3>
                <p className="text-gray-600">{cert.organization}</p>
              </div>
              <IconButton
                href={cert.verifyLink}
                icon={<ExternalLink className="w-5 h-5" />}
                label="Verify"
                external
              />
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <p className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-green-500" />
                ID: {cert.credentialId}
              </p>
              <p className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Issued: {cert.date}
                {cert.expiration && ` • Expires: ${cert.expiration}`}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}