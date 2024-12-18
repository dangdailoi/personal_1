import { Mail, Linkedin, Github, Facebook, Youtube } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <a 
              href="mailto:dailoi.ddl@gmail.com"
              className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>dailoi.ddl@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/dangdailoi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn Profile</span>
            </a>
            <a 
              href="https://github.com/dangdailoi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github className="w-6 h-6" />
              <span>GitHub Profile</span>
            </a>
            <a 
              href="https://www.facebook.com/dailoi.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span>Facebook Profile</span>
            </a>
            <a 
              href="https://www.youtube.com/@ailoiang1474"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Youtube className="w-6 h-6" />
              <span>YouTube Channel</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}