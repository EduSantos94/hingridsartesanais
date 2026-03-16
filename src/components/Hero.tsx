import { MessageCircle, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5500000000000";
const AIQFOME_LINK = "https://aiqfome.com/PR/goioere/hingrids-deliciais-artesanais";

interface HeroProps {
  whatsappNumber?: string;
  aiqfomeLink?: string;
}

const Hero = ({ whatsappNumber = WHATSAPP_NUMBER, aiqfomeLink = AIQFOME_LINK }: HeroProps) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um pedido de cookies 🍪`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/90 py-16 sm:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-primary" />
        <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-accent" />
        <div className="absolute left-1/3 top-1/2 h-16 w-16 rounded-full bg-primary" />
      </div>
      
      <div className="container relative mx-auto px-4 text-center">
        <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-primary-foreground">
          🍪 Feitos com amor, saboreados com carinho
        </span>
        
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl">
          Cookies Artesanais
          <br />
          <span className="text-primary">Irresistíveis</span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg text-secondary-foreground/80">
          Cada cookie é preparado com ingredientes selecionados e muito carinho. 
          Sabores únicos que vão conquistar seu paladar e adoçar seus momentos especiais.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            asChild 
            size="lg"
            className="gap-2 bg-red-500 px-8 text-lg hover:bg-red-600"
          >
            <a href={aiqfomeLink} target="_blank" rel="noopener noreferrer">
              <UtensilsCrossed className="h-5 w-5" />
              Pedir no aiqfome
            </a>
          </Button>
          <Button 
            asChild 
            size="lg"
            className="gap-2 bg-green-600 px-8 text-lg hover:bg-green-700"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-secondary-foreground/30 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10"
          >
            <a href="#catalogo">
              Ver Catálogo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
