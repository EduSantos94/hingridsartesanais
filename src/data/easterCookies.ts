import creamCheeseAmora from "@/assets/easter/cream-cheese-amora.png";
import duoKinder from "@/assets/easter/duo-kinder.png";
import nutella from "@/assets/easter/nutella.png";
import biscoff from "@/assets/easter/biscoff.png";

export interface EasterCookie {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const easterCookies: EasterCookie[] = [
  {
    id: 1,
    name: "Cream Cheese com Geleia de Amora",
    description: "Cookie em formato de ovo recheado com cream cheese e geleia de amora artesanal.",
    price: "R$ 25,90",
    image: creamCheeseAmora,
  },
  {
    id: 2,
    name: "Nutella",
    description: "Cookie em formato de ovo com gotas de chocolate e recheio generoso de Nutella.",
    price: "R$ 26,90",
    image: nutella,
  },
  {
    id: 3,
    name: "Duo Kinder",
    description: "Cookie em formato de ovo coberto com chocolate branco e Kinder Bueno White.",
    price: "R$ 27,90",
    image: duoKinder,
  },
  {
    id: 4,
    name: "Biscoff",
    description: "Cookie em formato de ovo com pasta crocante de Biscoff e biscoito Lotus.",
    price: "R$ 28,90",
    image: biscoff,
  },
];

export const EASTER_PROMO = "🔥 2 por R$ 49,90";
