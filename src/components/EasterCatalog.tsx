import { easterCookies, EASTER_PROMO } from "@/data/easterCookies";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Egg } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WHATSAPP_NUMBER = "5544984232401";

const EasterCatalog = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de pedir os cookies de Páscoa 🐣🍪`;

  return (
    <section id="pascoa" className="py-16 sm:py-24 bg-gradient-to-b from-[hsl(280,40%,97%)] to-background">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[hsl(280,50%,95%)] px-4 py-1.5">
            <Egg className="h-4 w-4 text-[hsl(280,50%,50%)]" />
            <span className="text-sm font-semibold text-[hsl(280,50%,40%)]">Edição Especial</span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            🐣 Páscoa 2026
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Cookies artesanais em formato de ovo — perfeitos para presentear!
          </p>
          <div className="mt-4 inline-block rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-lg">
            {EASTER_PROMO}
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {easterCookies.map((cookie) => (
            <Card
              key={cookie.id}
              className="group overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-[hsl(280,50%,60%)]/30 hover:shadow-xl"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={cookie.image}
                  alt={cookie.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-sm font-bold text-foreground sm:text-base">{cookie.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{cookie.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-[hsl(280,50%,95%)] px-3 py-1 text-sm font-bold text-[hsl(280,50%,40%)]">
                    {cookie.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-green-600 hover:bg-green-700 text-base"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Encomendar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EasterCatalog;
