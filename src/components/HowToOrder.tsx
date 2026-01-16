import { MessageCircle, Instagram, Clock, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WHATSAPP_NUMBER = "5544984232401";
const INSTAGRAM_USER = "hingrids.deliciasartesanais";

interface HowToOrderProps {
  whatsappNumber?: string;
  instagramUser?: string;
}

const steps = [
  {
    icon: MessageCircle,
    title: "1. Entre em Contato",
    description: "Mande uma mensagem pelo WhatsApp ou Instagram com os sabores desejados.",
  },
  {
    icon: Package,
    title: "2. Confirme o Pedido",
    description: "Combinamos a quantidade, data de entrega e forma de pagamento.",
  },
  {
    icon: Clock,
    title: "3. Aguarde a Magia",
    description: "Preparamos seus cookies fresquinhos com muito carinho para você!",
  },
];

const HowToOrder = ({ 
  whatsappNumber = WHATSAPP_NUMBER, 
  instagramUser = INSTAGRAM_USER 
}: HowToOrderProps) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um pedido de cookies 🍪`;
  const instagramLink = `https://instagram.com/${instagramUser}`;

  return (
    <section className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Simples e Fácil
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Como Fazer seu Pedido
          </h2>
        </div>
        
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 bg-card text-center shadow-lg">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            asChild 
            size="lg"
            className="gap-2 bg-green-600 px-8 hover:bg-green-700"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
          >
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              Seguir no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
