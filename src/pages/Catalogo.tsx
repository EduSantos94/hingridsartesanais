import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieCardCompact from "@/components/CookieCardCompact";
import CookieCardList from "@/components/CookieCardList";
import { cookies } from "@/data/cookies";
import { ArrowLeft, LayoutGrid, List } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type ViewMode = "grid" | "list";

const Catalogo = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
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
            
            <div className="flex rounded-lg border bg-card p-1 sm:hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() => setViewMode("grid")}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {cookies.map((cookie) => (
                <CookieCardCompact key={cookie.id} cookie={cookie} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border bg-card p-3">
              {cookies.map((cookie) => (
                <CookieCardList key={cookie.id} cookie={cookie} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalogo;
