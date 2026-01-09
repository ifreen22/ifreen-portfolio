import { Mail, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl font-semibold mb-1">
              Ifreen Siddiqui
            </p>
            <p className="text-background/70 text-sm">
              Aspiring AI & Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:ifreensiddiqui22@gmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ifreen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm flex items-center justify-center gap-1">
            © {currentYear} Ifreen Siddiqui. Built with <Heart size={14} className="text-primary" /> in Pune.
          </p>
        </div>
      </div>
    </footer>
  );
};
