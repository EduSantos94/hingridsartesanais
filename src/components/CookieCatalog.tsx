import CookieCard from "./CookieCard";

// Dados de exemplo - substituir pelas fotos e informações reais
const cookies = [
  {
    id: 1,
    name: "Chocolate Chip Classic",
    description: "O clássico cookie com gotas de chocolate belga. Crocante por fora, macio por dentro.",
    price: "R$ 8,00",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Red Velvet",
    description: "Cookie vermelho aveludado com gotas de chocolate branco. Sabor único e especial.",
    price: "R$ 10,00",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Brownie Cookie",
    description: "A combinação perfeita de brownie e cookie. Intenso sabor de chocolate.",
    price: "R$ 10,00",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Cookies & Cream",
    description: "Cookie de baunilha com pedaços de biscoito Oreo. Uma explosão de sabor!",
    price: "R$ 10,00",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Ninho com Nutella",
    description: "Cookie de leite ninho com recheio generoso de Nutella. Derrete na boca!",
    price: "R$ 12,00",
    image: "https://images.unsplash.com/photo-1625876981283-be8d3e4bb79c?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Pistache",
    description: "Cookie premium de pistache com chocolate branco. Sofisticado e irresistível.",
    price: "R$ 15,00",
    image: "https://images.unsplash.com/photo-1584847801423-852691e41bc7?w=400&h=400&fit=crop",
  },
];

const CookieCatalog = () => {
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
          {cookies.map((cookie) => (
            <CookieCard 
              key={cookie.id}
              name={cookie.name}
              description={cookie.description}
              price={cookie.price}
              image={cookie.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CookieCatalog;
