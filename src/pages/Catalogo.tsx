import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieCardCompact from "@/components/CookieCardCompact";
import CookieCardList from "@/components/CookieCardList";
import { classicCookies, fitCookies, type Cookie } from "@/data/cookies";
import { ArrowLeft, ChevronLeft, ChevronRight, LayoutGrid, List } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type ViewMode = "grid" | "list";
type MenuTab = "classic" | "fit";

const Catalogo = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [menu, setMenu] = useState<MenuTab>("classic");

  const list: Cookie[] = menu === "fit" ? fitCookies : classicCookies;


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
                  {menu === "fit" ? "Cardápio Fitness" : "Catálogo Completo"}
                </h1>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {list.length} sabores disponíveis
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

          <div className="mb-4 inline-flex rounded-full border bg-card p-1">
            <Button
              variant={menu === "classic" ? "default" : "ghost"}
              size="sm"
              className="h-8 rounded-full px-4 text-xs sm:text-sm"
              onClick={() => changeMenu("classic")}
            >
              Tradicionais
            </Button>
            <Button
              variant={menu === "fit" ? "default" : "ghost"}
              size="sm"
              className="h-8 rounded-full px-4 text-xs sm:text-sm"
              onClick={() => changeMenu("fit")}
            >
              Fitness
            </Button>
          </div>

          {menu === "fit" && (
            <p className="mb-4 rounded-lg bg-muted/60 p-3 text-xs text-muted-foreground sm:text-sm">
              Sabores com massa sem açúcar e mais proteína, para quem quer se cuidar sem perder o sabor.
            </p>
          )}

          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {paginatedList.map((cookie) => (
                <CookieCardCompact key={cookie.id} cookie={cookie} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border bg-card p-3">
              {paginatedList.map((cookie) => (
                <CookieCardList key={cookie.id} cookie={cookie} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-4 flex items-center justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1 px-3 text-xs"
                disabled={currentPage === 1}
                onClick={() => setPage(currentPage - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </Button>
              <span className="text-xs text-muted-foreground">
                Página {currentPage} de {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1 px-3 text-xs"
                disabled={currentPage === totalPages}
                onClick={() => setPage(currentPage + 1)}
              >
                Próxima
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogo;
