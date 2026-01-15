import { Instagram, MessageCircle, Heart } from "lucide-react";
import logo from "@/assets/logo-hingrids.jpeg";

const WHATSAPP_NUMBER = "5500000000000";
const INSTAGRAM_USER = "hingridsdelicias";

interface FooterProps {
  whatsappNumber?: string;
  instagramUser?: string;
}

const Footer = ({ 
  whatsappNumber = WHATSAPP_NUMBER, 
  instagramUser = INSTAGRAM_USER 
}: FooterProps) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = `https://instagram.com/${instagramUser}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <img 
            src={logo} 
            alt="Hingrid's Delicias Artesanais" 
            className="h-20 w-20 rounded-full object-cover shadow-lg"
          />
          
          <div>
            <h3 className="text-xl font-bold text-secondary-foreground">
              Hingrid's Delícias Artesanais
            </h3>
            <p className="mt-1 text-sm text-secondary-foreground/70">
              Cookies artesanais feitos com amor
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white transition-transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          
          <div className="border-t border-secondary-foreground/10 pt-6 text-sm text-secondary-foreground/60">
            <p className="flex items-center justify-center gap-1">
              Feito com <Heart className="h-4 w-4 fill-primary text-primary" /> em {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
