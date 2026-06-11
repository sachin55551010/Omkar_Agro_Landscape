import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import { MoveUpRight } from "lucide-react";
import plant from "../../public/plants.webp";
import design from "../../public/design.jpg";
import maintenance from "../../public/maintenance.jpg";
import consultation from "../../public/consultant.jpg";
type ServieList = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: StaticImageData;
};
export const serviceList: ServieList[] = [
  {
    title: "GARDEN DESIGN",
    description:
      "Crafting the perfect garden space. We design a garden that suits your lifestyle",
    icon: MoveUpRight,
    image: design,
  },
  {
    title: "PLANT SELECTION",
    description:
      "Hand-picked greenery for your garden. Our expert selects the right plants.",
    icon: MoveUpRight,
    image: plant,
  },
  {
    title: "GARDEN MAINTENANCE",
    description:
      "Preserve your garden's allure. We offer ongoing maintenance services",
    icon: MoveUpRight,
    image: maintenance,
  },
  {
    title: "GARDEN CONSULTATION",
    description:
      "Expert advice at your fingertips. Consult with us to get valuable insights",
    icon: MoveUpRight,
    image: consultation,
  },
];
