"use client";
import { useState } from "react";
import { motion } from "motion/react";
import ProductList from "../components/ProductList";
import { plants } from "../constants/product_list";
import { FaFilter } from "react-icons/fa6";
import { HeadingList } from "../constants/heading_product_list";
import { akaya, merienda } from "../constants/custom_fonts";
import Image from "next/image";

const ProductsPage = () => {
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const filteredPlant = plants.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase()),
  );

  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="h-85 w-full bg-(--dark-green) flex flex-col items-center justify-center">
        {/* Heading and Categories */}
        <div>
          <h1
            className={`${akaya.className} text-center text-4xl lg:text-6xl text-white`}
          >
            Our Categories
          </h1>

          <ul className="flex gap-6 overflow-x-scroll px-6 lg:justify-center lg:overflow-hidden no-scrollbar mt-4">
            {HeadingList.map((product) => (
              <li
                key={product.title}
                className="h-fit flex flex-col items-center gap-1"
              >
                <div className="h-19 w-19 lg:h-24 lg:w-24 p-5 rounded-full bg-(--base-bg)">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image src={product.img} alt={product.title} />
                  </motion.div>
                </div>

                <p className="font-semibold text-sm lg:text-lg max-w-20 wrap-break-word text-center text-(--base-bg)">
                  {product.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sticky Search Section */}
      <div className="sticky top-0 z-50 w-full bg-(--dark-green) shadow-md">
        <h1
          className={`text-(--base-bg) px-4 text-lg lg:text-2xl ${merienda.className}`}
        >
          Explore Our Wide Variety of Plants and Flowers
        </h1>

        <div className="mt-2 flex justify-between items-center gap-4 px-3 pb-4 lg:justify-normal">
          <motion.input
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            initial={{ backgroundColor: "#ecfae5" }}
            animate={
              isFocus
                ? { backgroundColor: "#84b179" }
                : { backgroundColor: "#ecfae5" }
            }
            transition={{ duration: 0.3, ease: "linear" }}
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            type="text"
            placeholder="Search product"
            className="h-10 w-[95%] rounded-2xl pl-3 outline-none lg:w-[40%]"
          />

          <button className="rounded-md p-2 hover:bg-white/10">
            <FaFilter className="text-(--base-bg)" />
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="pt-6">
        <ProductList plants={filteredPlant} />
      </div>
    </main>
  );
};

export default ProductsPage;
