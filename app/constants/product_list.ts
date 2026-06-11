import { StaticImageData } from "next/image";
import samplePlant from "../../public/sample_plant.webp";
import { nanoid } from "nanoid";
export interface ProductListData {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  image: string | StaticImageData;
}
export const product_list: ProductListData[] = [
  {
    id: nanoid(),
    name: "name",
    type: "type",
    category: "category",
    description: "description",
    image: samplePlant,
  },
];

export const product_list_obj = {
  id: nanoid(),
  name: "Fiddle Leaf Fig",
  type: "Indoor Plant",
  category: "Ornamental",
  description:
    "A popular indoor plant with large, glossy green leaves. It adds a modern and elegant touch to homes, offices, and living spaces.",
  image: samplePlant,
};
