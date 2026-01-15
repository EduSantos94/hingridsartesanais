import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-hingrids.jpeg";

const WHATSAPP_NUMBER = "5500000000000"; // Substituir pelo número real
const INSTAGRAM_USER = "hingridsdelicias"; // Substituir pelo @ real

interface HeaderProps {
  whatsappNumber?: string;
  instagramUser?: string;
}

const Header = ({ 
  whatsappNumber = WHATSAPP_NUMBER, 
  instagramUser = INSTAGRAM_USER 
}: HeaderProps) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um pedido de cookies 🍪`;
  const instagramLink = `https://instagram.com/${instagramUser}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Hingrid's Delicias Artesanais" 
            className="h-14 w-14 rounded-full object-cover shadow-md"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-secondary">Hingrid's</h1>
            <p className="text-xs text-muted-foreground">Delícias Artesanais</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className="gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
          >
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </Button>
          <Button 
            asChild 
            size="sm"
            className="gap-2 bg-green-600 hover:bg-green-700"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
