import { type ReactNode } from 'react';
import { baseClasses } from '../../utils/styles';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`${baseClasses.card} ${className}`}>
      {children}
    </div>
  );
}