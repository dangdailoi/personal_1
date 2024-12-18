import { type ReactNode } from 'react';
import { baseClasses } from '../../utils/styles';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`${baseClasses.section} ${className}`}>
      <div className={baseClasses.container}>
        <h2 className={baseClasses.title}>{title}</h2>
        {subtitle && <p className={baseClasses.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}