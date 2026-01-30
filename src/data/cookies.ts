import tradicional from "@/assets/cookies/tradicional.jpeg";
import paoMel from "@/assets/cookies/pao-mel.jpeg";
import nutella from "@/assets/cookies/nutella.jpeg";
import duoKinder from "@/assets/cookies/duo-kinder.jpeg";
import pistache from "@/assets/cookies/pistache.jpeg";
import cocadaCremosa from "@/assets/cookies/cocada-cremosa.jpeg";
import redVelvet from "@/assets/cookies/red-velvet.jpeg";
import maracujaBlack from "@/assets/cookies/maracuja-black.jpeg";

export interface Cookie {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: string;
  weight: string;
  image: string;
}

export const cookies: Cookie[] = [
  {
    id: 1,
    name: "Tradicional",
    description: "O clássico cookie com gotas de chocolate. Crocante por fora, macio por dentro.",
    shortDescription: "Gotas de chocolate",
    price: "R$ 12,00",
    weight: "90-95g",
    image: tradicional,
  },
  {
    id: 2,
    name: "Pão de Mel Trufado",
    description: "Cookie de pão de mel trufado com delicioso doce de leite Fonte Azul.",
    shortDescription: "Doce de leite Fonte Azul",
    price: "R$ 15,00",
    weight: "110-120g",
    image: paoMel,
  },
  {
    id: 3,
    name: "Nutella",
    description: "Cookie recheado com generosas camadas de Nutella. Irresistível!",
    shortDescription: "Trufado com Nutella",
    price: "R$ 15,00",
    weight: "110-120g",
    image: nutella,
  },
  {
    id: 4,
    name: "Duo Kinder",
    description: "Cookie com recheio cremoso de Kinder. Chocolate branco e ao leite em harmonia.",
    shortDescription: "Creme de Kinder Bueno",
    price: "R$ 15,00",
    weight: "110-120g",
    image: duoKinder,
  },
  {
    id: 5,
    name: "Pistache",
    description: "Cookie premium com recheio de creme de pistache. Sofisticado e delicioso.",
    shortDescription: "Creme de pistache",
    price: "R$ 15,00",
    weight: "110-120g",
    image: pistache,
  },
  {
    id: 6,
    name: "Cocada Cremosa",
    description: "Cookie de coco com recheio de cocada cremosa. O sabor do Brasil!",
    shortDescription: "Cocada cremosa",
    price: "R$ 15,00",
    weight: "110-120g",
    image: cocadaCremosa,
  },
  {
    id: 7,
    name: "Red Velvet",
    description: "Cookie vermelho aveludado com recheio cremoso. Elegância em cada mordida.",
    shortDescription: "Brigadeiro de cream cheese",
    price: "R$ 15,00",
    weight: "110-120g",
    image: redVelvet,
  },
  {
    id: 8,
    name: "Maracujá Black",
    description: "Cookie de cacau black trufado com irresistível recheio de maracujá.",
    shortDescription: "Cacau black trufado com maracujá",
    price: "R$ 15,00",
    weight: "110-120g",
    image: maracujaBlack,
  },
];
