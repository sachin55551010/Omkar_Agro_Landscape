import { Akaya_Kanadaka } from "next/font/google";
import { Merienda } from "next/font/google";
import { Cormorant } from "next/font/google";
export const akaya = Akaya_Kanadaka({
  subsets: ["latin"],
  weight: "400",
});

export const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "700"],
});
