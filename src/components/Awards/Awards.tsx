import { Section } from '../common/Section';
import { AwardCard } from './AwardCard';
import { awards } from '../../data';

export function Awards() {
  return (
    <Section 
      id="awards" 
      title="Honors & Awards"
      subtitle="Recognition received for excellence in technology innovation and community contributions."
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {awards.map((award) => (
          <AwardCard key={award.title} {...award} />
        ))}
      </div>
    </Section>
  );
}