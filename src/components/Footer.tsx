import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream/80 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-cream mb-4">
              Indiana <span className="text-accent">Decor</span>
            </h3>
            <p className="text-cream/60 leading-relaxed text-sm">
              Spécialiste de la décoration et l'aménagement intérieur à Tanger.
              Nous transformons vos espaces en lieux de vie exceptionnels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              {["Accueil", "Services", "Réalisations", "À Propos", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "").replace("à", "a")}`}
                  className="text-cream/60 hover:text-accent transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Réseaux Sociaux</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/indiana.decor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm border border-cream/20 flex items-center justify-center text-cream/60 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm border border-cream/20 flex items-center justify-center text-cream/60 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm border border-cream/20 flex items-center justify-center text-cream/60 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} Indiana Tanger. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
