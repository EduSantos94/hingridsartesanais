import CookieCard from "./CookieCard";
import tradicional from "@/assets/cookies/tradicional.jpeg";
import paoMel from "@/assets/cookies/pao-mel.jpeg";
import nutella from "@/assets/cookies/nutella.jpeg";
import duoKinder from "@/assets/cookies/duo-kinder.jpeg";
import pistache from "@/assets/cookies/pistache.jpeg";
import cocadaCremosa from "@/assets/cookies/cocada-cremosa.jpeg";

const cookies = [
  {
    id: 1,
    name: "Tradicional",
    description: "O clássico cookie com gotas de chocolate. Crocante por fora, macio por dentro.",
    price: "R$ 12,00",
    image: tradicional,
  },
  {
    id: 2,
    name: "Pão de Mel Trufado",
    description: "Cookie de pão de mel trufado com delicioso doce de leite Fonte Azul.",
    price: "R$ 15,00",
    image: paoMel,
  },
  {
    id: 3,
    name: "Nutella",
    description: "Cookie recheado com generosas camadas de Nutella. Irresistível!",
    price: "R$ 15,00",
    image: nutella,
  },
  {
    id: 4,
    name: "Duo Kinder",
    description: "Cookie com recheio cremoso de Kinder. Chocolate branco e ao leite em harmonia.",
    price: "R$ 15,00",
    image: duoKinder,
  },
  {
    id: 5,
    name: "Pistache",
    description: "Cookie premium com recheio de creme de pistache. Sofisticado e delicioso.",
    price: "R$ 15,00",
    image: pistache,
  },
  {
    id: 6,
    name: "Cocada Cremosa",
    description: "Cookie de coco com recheio de cocada cremosa. O sabor do Brasil!",
    price: "R$ 15,00",
    image: cocadaCremosa,
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
