import { Github, Linkedin, Download, Facebook, Youtube } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-gray-600 mb-4">Hello, I'm</p>
          <h1 className="text-6xl font-bold mb-6">Dai Loi Dang</h1>
          <h2 className="text-3xl text-gray-700 mb-7">Data Scientist | Market Researcher</h2>
          {/* <p className="text-gray-600 mb-6"></p> */}
          <div className="flex gap-4">
            <Button href="https://drive.google.com/uc?export=download&id=1GLc2pyOhhRjEFKzqB-CsgoqXDZApFCcN" variant="primary">
              <Download className="w-4 h-4 mr-2" />Download CV</Button>
            <Button href="#contact" variant="secondary">Contact Info</Button>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" className="text-gray-600 hover:text-gray-900">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="https://media.canva.com/v2/image-resize/format:PNG/height:500/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FW7c-Y%2FMAGY82W7c-Y%2F1%2Fp.png/watermark:F/width:500?csig=AAAAAAAAAAAAAAAAAAAAAKnX5IGF3wQZrZ2ovB4TMPNdZep6ipMdM1SdsbkkWHaM&exp=1734516749&osig=AAAAAAAAAAAAAAAAAAAAABpXRh9zlt7M8wfbhqj8lw1l4_xCDRw_MEjSrcg3n9oH&signer=media-rpc&x-canva-quality=thumbnail_large" 
            alt="Profile" 
            className="w-80 h-80 rounded-full object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
