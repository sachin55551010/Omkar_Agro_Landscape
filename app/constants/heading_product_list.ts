import { StaticImageData } from "next/image";
import plant from "../../public/svg icons/plant-svgrepo-com.svg";
import pot from "../../public/svg icons/plant-leaf-svgrepo-com.svg";
import soil from "../../public/svg icons/soil-svgrepo-com.svg";
import fertilizer from "../../public/svg icons/fertilizer-svgrepo-com.svg";
import seed from "../../public/svg icons/seed-svgrepo-com.svg";
import tool from "../../public/svg icons/tools-rake-svgrepo-com.svg";
import watering from "../../public/svg icons/water-can-svgrepo-com.svg";
import pest from "../../public/svg icons/spray-insecticide-svgrepo-com.svg";
import decoration from "../../public/svg icons/garden-svgrepo-com.svg";

export interface HeadingProductList {
  title: string;
  img: string | StaticImageData;
}

export const HeadingList: HeadingProductList[] = [
  { title: "Plants", img: plant },
  { title: "Pots", img: pot },
  { title: "Soil", img: soil },
  { title: "Fertilizers", img: fertilizer },
  { title: "Seeds", img: seed },
  { title: "Garden Tools", img: tool },
  { title: "Watering Solutions", img: watering },
  { title: "Pest Control", img: pest },
  { title: "Gardening Decor", img: decoration },
];
