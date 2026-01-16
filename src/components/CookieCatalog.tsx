import CookieCard from "./CookieCard";
import { cookies } from "@/data/cookies";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CookieCatalog = () => {
  // Show only first 3 cookies on home page
  const featuredCookies = cookies.slice(0, 3);

  return (
    <section id="catalogo" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Nossos Sabores
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Catálogo de Cookies
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Escolha seus favoritos e faça seu pedido pelo WhatsApp. 
            Aceitamos encomendas para festas e eventos especiais!
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCookies.map((cookie) => (
            <CookieCard 
              key={cookie.id}
              name={cookie.name}
              description={cookie.description}
              price={cookie.price}
              weight={cookie.weight}
              image={cookie.image}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link to="/catalogo">
              Ver Todos os Sabores
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CookieCatalog;
