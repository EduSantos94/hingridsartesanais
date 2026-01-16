import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieCardCompact from "@/components/CookieCardCompact";
import { cookies } from "@/data/cookies";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Catalogo = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-8">
          <div className="mb-4 flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="h-8 px-2">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold text-foreground sm:text-2xl">
                Catálogo Completo
              </h1>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {cookies.length} sabores disponíveis
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {cookies.map((cookie) => (
              <CookieCardCompact key={cookie.id} cookie={cookie} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalogo;
