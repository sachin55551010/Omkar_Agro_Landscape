import { StaticImageData } from "next/image";
import samplePlant from "../../public/sample_plant.webp";
import { nanoid } from "nanoid";
import rose from "../../public/outdoor flowers/rose.jpg";
import marigold from "../../public/outdoor flowers/marigold.jpg";
import petunia from "../../public/outdoor flowers/petunia.jpg";
import Chrysanthemum from "../../public/outdoor flowers/chrysanthemum.jpg";
import pansy from "../../public/outdoor flowers/pansy.jpg";
import geranium from "../../public/outdoor flowers/geranium.jpg";
import Bougainvillea from "../../public/outdoor flowers/bougainvillea.jpg";
import Hydrangea from "../../public/outdoor flowers/hydrangea.jpg";
import azalea from "../../public/outdoor flowers/azalea.jpg";
import dahlia from "../../public/outdoor flowers/dahlia.jpg";
import Areca from "../../public/indoor plants/areca palm indoor.jpg";
import BostonFern from "../../public/indoor plants/boston fern indoor.jpg";
import Dracaena from "../../public/indoor plants/dracaena indoor.jpg";
import MoneyPlant from "../../public/indoor plants/money plant indoor.jpg";
import Monstera from "../../public/indoor plants/monstera indoor.jpg";
import PeaceLily from "../../public/indoor plants/peace lily indoor.jpg";
import RubberPlant from "../../public/indoor plants/rubber plant indoor.jpg";
import SnakePlant from "../../public/indoor plants/snake indoor.jpg";
import SpiderPlant from "../../public/indoor plants/spider plant indoor.jpg";
import ZZPlant from "../../public/indoor plants/zz plant indoor.jpg";
export interface ProductListData {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  imageUrl: string | StaticImageData;
}
export const product_list: ProductListData[] = [
  {
    id: nanoid(),
    name: "name",
    type: "type",
    category: "category",
    description: "description",
    imageUrl: samplePlant,
  },
];

export const product_list_obj = {
  id: nanoid(),
  name: "Fiddle Leaf Fig",
  type: "Indoor Plant",
  category: "Ornamental",
  description:
    "A popular indoor plant with large, glossy green leaves. It adds a modern and elegant touch to homes, offices, and living spaces.",
  imageUrl: samplePlant,
};

export const plants: ProductListData[] = [
  {
    id: nanoid(),
    name: "Rose",
    type: "Outdoor Flower",
    category: "Ornamental",
    description:
      "One of the most popular flowering plants in Himachal Pradesh, widely used in home gardens, hotels, and resorts for its colorful blooms and pleasant fragrance.",
    imageUrl: rose,
  },
  {
    id: nanoid(),
    name: "Marigold",
    type: "Outdoor Flower",
    category: "Seasonal Flower",
    description:
      "A vibrant flowering plant commonly used in landscaping, pathways, and decorative garden beds due to its bright yellow and orange flowers.",
    imageUrl: marigold,
  },
  {
    id: nanoid(),
    name: "Petunia",
    type: "Outdoor Flower",
    category: "Seasonal Flower",
    description:
      "Known for its abundant blooms and variety of colors, Petunia is a favorite choice for hotel gardens, balconies, and hanging baskets.",
    imageUrl: petunia,
  },
  {
    id: nanoid(),
    name: "Dahlia",
    type: "Outdoor Flower",
    category: "Ornamental",
    description:
      "A stunning flowering plant with large colorful blooms that adds elegance and visual appeal to landscapes and resort gardens.",
    imageUrl: dahlia,
  },
  {
    id: nanoid(),
    name: "Chrysanthemum",
    type: "Outdoor Flower",
    category: "Ornamental",
    description:
      "Popular for autumn and winter flowering displays, Chrysanthemums are widely planted in gardens and hospitality properties.",
    imageUrl: Chrysanthemum,
  },
  {
    id: nanoid(),
    name: "Pansy",
    type: "Outdoor Flower",
    category: "Seasonal Flower",
    description:
      "A cool-weather flowering plant admired for its colorful petals and unique patterns, commonly seen in Himachal hill gardens.",
    imageUrl: pansy,
  },
  {
    id: nanoid(),
    name: "Geranium",
    type: "Outdoor Flower",
    category: "Ornamental",
    description:
      "A hardy flowering plant frequently used in pots, balconies, and resort landscapes because of its long blooming season.",
    imageUrl: geranium,
  },
  {
    id: nanoid(),
    name: "Bougainvillea",
    type: "Outdoor Flower",
    category: "Flowering Shrub",
    description:
      "A colorful flowering shrub often used along fences, walls, and entrances to create vibrant outdoor displays.",
    imageUrl: Bougainvillea,
  },
  {
    id: nanoid(),
    name: "Hydrangea",
    type: "Outdoor Flower",
    category: "Flowering Shrub",
    description:
      "A beautiful flowering shrub with large flower clusters, commonly found in premium resorts and mountain gardens.",
    imageUrl: Hydrangea,
  },
  {
    id: nanoid(),
    name: "Azalea",
    type: "Outdoor Flower",
    category: "Seasonal Flower",
    description:
      "An easy-to-grow flowering plant with bright blooms that attracts butterflies and enhances garden aesthetics.",
    imageUrl: azalea,
  },
  {
    id: nanoid(),
    name: "Areca Palm",
    type: "Indoor Plant",
    category: "Palm",
    description:
      "A popular indoor palm with feathery green fronds that brings a tropical feel to homes, hotels, offices, and resort lobbies.",
    imageUrl: Areca,
  },
  {
    id: nanoid(),
    name: "Boston Fern",
    type: "Indoor Plant",
    category: "Fern",
    description:
      "A lush fern known for its arching green fronds. It is commonly used in hanging baskets and indoor decorative spaces.",
    imageUrl: BostonFern,
  },
  {
    id: nanoid(),
    name: "Dracaena",
    type: "Indoor Plant",
    category: "Ornamental",
    description:
      "An elegant foliage plant with long, sword-shaped leaves that adds a modern and sophisticated touch to interiors.",
    imageUrl: Dracaena,
  },
  {
    id: nanoid(),
    name: "Money Plant",
    type: "Indoor Plant",
    category: "Climber",
    description:
      "A fast-growing vine with heart-shaped leaves, widely grown indoors for decoration and believed to symbolize prosperity.",
    imageUrl: MoneyPlant,
  },
  {
    id: nanoid(),
    name: "Monstera",
    type: "Indoor Plant",
    category: "Tropical Foliage",
    description:
      "A trendy ornamental plant featuring large split leaves that create a bold and contemporary indoor aesthetic.",
    imageUrl: Monstera,
  },
  {
    id: nanoid(),
    name: "Peace Lily",
    type: "Indoor Plant",
    category: "Flowering Plant",
    description:
      "A beautiful indoor plant with glossy leaves and elegant white blooms, commonly used in homes, hotels, and offices.",
    imageUrl: PeaceLily,
  },
  {
    id: nanoid(),
    name: "Rubber Plant",
    type: "Indoor Plant",
    category: "Ornamental",
    description:
      "A hardy indoor plant with large, shiny dark-green leaves that enhances modern living and workspace interiors.",
    imageUrl: RubberPlant,
  },
  {
    id: nanoid(),
    name: "Snake Plant",
    type: "Indoor Plant",
    category: "Succulent",
    description:
      "A low-maintenance plant with upright sword-like leaves, ideal for bedrooms, offices, and indoor decorative arrangements.",
    imageUrl: SnakePlant,
  },
  {
    id: nanoid(),
    name: "Spider Plant",
    type: "Indoor Plant",
    category: "Hanging Plant",
    description:
      "A graceful plant with arching green-and-white striped leaves, perfect for hanging baskets and shelves.",
    imageUrl: SpiderPlant,
  },
  {
    id: nanoid(),
    name: "ZZ Plant",
    type: "Indoor Plant",
    category: "Ornamental",
    description:
      "A resilient indoor plant with glossy green foliage that thrives in low-light conditions and requires minimal care.",
    imageUrl: ZZPlant,
  },
];
