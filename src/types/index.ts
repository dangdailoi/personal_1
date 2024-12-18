// Common interfaces used across components
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
  achievements: string[];
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  expiration?: string;
  credentialId: string;
  verifyLink: string;
}

export interface Language {
  name: string;
  level: string;
}