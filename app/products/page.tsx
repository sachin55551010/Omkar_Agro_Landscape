"use client";
import { useState } from "react";
import { motion } from "motion/react";
import ProductList from "../components/ProductList";
import { plants } from "../constants/product_list";
import { FaFilter } from "react-icons/fa6";
import { HeadingList } from "../constants/heading_product_list";
import { akaya } from "../constants/custom_fonts";
import Image from "next/image";

const ProductsPage = () => {
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const filteredPlant = plants.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase()),
  );

  return (
    <main className="">
      <div className="h-75 w-full bg-(--dark-green)">
        <div className="pt-20">
          <h1
            className={`${akaya.className} text-center text-4xl lg:text-6xl text-white`}
          >
            Our Categories
          </h1>
          <ul className="flex gap-6 overflow-x-auto px-6 lg:justify-center lg:overflow-hidden no-scrollbar pt-6">
            {HeadingList.map((product) => {
              return (
                <li
                  key={product.title}
                  className="h-fit flex flex-col items-center gap-1"
                >
                  <div className="h-19 w-19 lg:h-24 lg:w-24 p-5 rounded-full bg-(--base-bg)">
                    <Image src={product.img} alt={product.title} />
                  </div>
                  <p className="font-semibold text-sm lg:text-lg max-w-20 wrap-break-words text-(--base-bg)">
                    {product.title}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="sticky top-0 w-full z-30 bg-(--dark-green)">
        <h1>You can find all the variaty of plants here</h1>

        {/* search filter sort section */}
        <div className="mt-2 flex justify-between items-center px-3 gap-4 lg:justify-normal p-3">
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
            className={`rounded-2xl h-10 pl-2 w-[95%] lg:w-[40%] outline-0`}
          />
          <div className="">
            <FaFilter />
          </div>
        </div>
      </div>

      <div className="pt-16">
        <ProductList plants={filteredPlant} />
      </div>
    </main>
  );
};

export default ProductsPage;
