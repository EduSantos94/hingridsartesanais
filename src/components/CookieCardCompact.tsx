import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import type { Cookie } from "@/data/cookies";

interface CookieCardCompactProps {
  cookie: Cookie;
  whatsappNumber?: string;
}

const WHATSAPP_NUMBER = "5544984232401";

const CookieCardCompact = ({ 
  cookie,
  whatsappNumber = WHATSAPP_NUMBER 
}: CookieCardCompactProps) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de pedir o cookie ${cookie.name} 🍪`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <img 
          src={cookie.image} 
          alt={cookie.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="text-sm font-bold text-foreground line-clamp-1">{cookie.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{cookie.description}</p>
        <div className="mt-2 flex items-center justify-between gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-primary">{cookie.price}</span>
            <span className="text-[10px] text-muted-foreground">{cookie.weight}</span>
          </div>
          <Button 
            asChild 
            size="sm"
            className="h-7 gap-1 bg-green-600 px-2 text-xs hover:bg-green-700"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-3 w-3" />
              Pedir
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieCardCompact;
