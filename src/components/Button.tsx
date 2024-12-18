import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, href, variant = 'primary' }: ButtonProps) {
  const baseClasses = "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <a 
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </a>
  );
}