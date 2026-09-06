import tradicional from "@/assets/cookies/tradicional.jpeg";
import tradicionalFit from "@/assets/cookies/tradicional-fit.jpeg";
import paoMel from "@/assets/cookies/pao-mel.jpeg";
import nutella from "@/assets/cookies/nutella.jpeg";
import duoKinder from "@/assets/cookies/duo-kinder.jpeg";
// import pistache from "@/assets/cookies/pistache.jpeg";
import cocadaCremosa from "@/assets/cookies/cocada-cremosa.jpeg";
import redVelvet from "@/assets/cookies/red-velvet.jpeg";
import maracujaBlack from "@/assets/cookies/maracuja-black.jpeg";
import ouroBranco from "@/assets/cookies/ouro-branco.jpeg";
import lotusBiscoff from "@/assets/cookies/lotus-biscoff.jpeg";
import trufadoWhey from "@/assets/cookies/trufado-whey.jpeg.asset.json";
import pacoca from "@/assets/cookies/pacoca.jpeg.asset.json";

export interface Cookie {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: string;
  weight: string;
  image: string;
  category?: "classic" | "fit";
}

export const cookies: Cookie[] = [
  {
    id: 1,
    name: "Tradicional",
    description: "O clássico cookie com gotas de chocolate. Crocante por fora, macio por dentro.",
    shortDescription: "Gotas de chocolate",
    price: "R$ 12,00",
    weight: "100g",
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
  // {
  //   id: 5,
  //   name: "Pistache",
  //   description: "Cookie premium com recheio de creme de pistache. Sofisticado e delicioso.",
  //   shortDescription: "Creme de pistache",
  //   price: "R$ 15,00",
  //   weight: "110-120g",
  //   image: pistache,
  // },
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
  {
    id: 9,
    name: "Ouro Branco",
    description: "Cookie recheado com o irresistível chocolate Ouro Branco. Cremosidade incomparável!",
    shortDescription: "Recheio de Ouro Branco",
    price: "R$ 15,00",
    weight: "110-120g",
    image: ouroBranco,
  },
  {
    id: 10,
    name: "Lotus Biscoff",
    description: "Gotas de chocolate branco trufado com creme de Biscoff. Crocância e cremosidade em perfeita harmonia.",
    shortDescription: "Chocolate branco com creme de Biscoff",
    price: "R$ 16,90",
    weight: "110-120g",
    image: lotusBiscoff,
  },
  {
    id: 11,
    name: "Tradicional Fit",
    description: "Massa sem açúcar e proteico 10g.",
    shortDescription: "Sem açúcar e proteico 10g",
    price: "R$ 17,90",
    weight: "95-100g",
    image: tradicionalFit,
    category: "fit",
  },
  {
    id: 12,
    name: "Trufado com Whey",
    description: "Massa sem açúcar trufado com whey com 15g de proteína.",
    shortDescription: "Sem açúcar, 15g de proteína",
    price: "R$ 19,90",
    weight: "95-100g",
    image: trufadoWhey.url,
    category: "fit",
  },
  {
    id: 13,
    name: "Paçoca",
    description: "Cookie trufado com brigadeiro de paçoca.",
    shortDescription: "Brigadeiro de paçoca",
    price: "R$ 15,00",
    weight: "110-120g",
    image: pacoca.url,
  },
];

export const classicCookies = cookies.filter((c) => c.category !== "fit");
export const fitCookies = cookies.filter((c) => c.category === "fit");
