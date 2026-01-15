import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface CookieCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  whatsappNumber?: string;
}

const WHATSAPP_NUMBER = "5500000000000";

const CookieCard = ({ 
  name, 
  description, 
  price, 
  image,
  whatsappNumber = WHATSAPP_NUMBER 
}: CookieCardProps) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de pedir o cookie ${name} 🍪`;

  return (
    <Card className="group overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-5">
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
          <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
            {price}
          </span>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <Button 
          asChild 
          className="w-full gap-2 bg-green-600 hover:bg-green-700"
          size="sm"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            Pedir
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CookieCard;
