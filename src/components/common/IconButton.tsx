import { type ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  href: string;
  external?: boolean;
}

export function IconButton({ icon, label, href, external }: IconButtonProps) {
  const props = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <a 
      href={href}
      className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
      {...props}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}