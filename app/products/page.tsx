"use client";
import { useState } from "react";
import { motion } from "motion/react";
import ProductList from "../components/ProductList";
import { plants } from "../constants/product_list";
import { FaFilter } from "react-icons/fa6";
import { HeadingList } from "../constants/heading_product_list";
import { akaya, merienda } from "../constants/custom_fonts";
import categories from "../../public/categories.png";
import Image from "next/image";

const ProductsPage = () => {
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const filteredPlant = plants.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase()),
  );

  return (
    <main>
      {/* Header */}
      <div className="h-90">
        <div className="relative h-full">
          <Image
            src={categories}
            alt="categories"
            fill
            className="object-cover brightness-50"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative flex items-center h-full overflow-x-scroll no-scrollbar px-4 lg:justify-center">
            <ul className="flex gap-4 lg:gap-8">
              {HeadingList.map((product) => {
                return (
                  <li
                    key={product.title}
                    className="h-18 w-18 flex flex-col items-center"
                  >
                    {/* categories image */}
                    <div className="h-20 w-20 z-10 border bg-(--base-bg) rounded-full p-4 lg:h-24 lg:w-24">
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Image src={product.img} alt={product.title} />
                      </motion.div>
                    </div>
                    <p className="text-(--base-bg) font-semibold">
                      {product.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* search bar */}
      <div className="bg-(--light-green) p-4 sticky top-0 z-20">
        <motion.input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          animate={
            isFocus
              ? { backgroundColor: "#5d8a52" }
              : { backgroundColor: "#a2cb8b" }
          }
          transition={{ duration: 0.4 }}
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          type="text"
          className="h-10 rounded-lg outline-0 w-[70%] lg:w-[40%] pl-4 text-(--base-bg) placeholder:text-zinc-400"
          placeholder="Search"
        />
      </div>
      <div className="pt-16">
        <ProductList plants={filteredPlant} />
      </div>
    </main>
  );
};

export default ProductsPage;
