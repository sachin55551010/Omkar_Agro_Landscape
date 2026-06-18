"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ProductListData, product_list_obj } from "../constants/product_list";
import { HiOutlineXMark } from "react-icons/hi2";
import { plants } from "../constants/product_list";

const ProductList = () => {
  const productListArr: ProductListData[] = Array(20).fill(product_list_obj);

  const [selectedProduct, setSelectedProduct] =
    useState<ProductListData | null>(null);

  const [clickPosition, setClickPosition] = useState({
    x: 0,
    y: 0,
  });
  const handleProductBtn = (
    e: React.MouseEvent<HTMLLIElement>,
    product: ProductListData,
  ): void => {
    setSelectedProduct(product);
    setClickPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      <div className="inline-flex items-center gap-2 mb-2">
        <span className="h-0.5 w-8 bg-(--accent-green) rounded-full"></span>
        <span className="text-sm uppercase tracking-[0.2em] text-(--accent-green)">
          Green Collection
        </span>
      </div>

      <h4 className="text-4xl font-bold text-zinc-500">Products</h4>

      <p className="mt-2 max-w-2xl text-zinc-400">
        Discover a wide variety of ornamental plants, flowering species, and
        landscaping favorites.
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {productListArr.map((product, index) => (
          <li
            key={index}
            onClick={(e) => handleProductBtn(e, product)}
            className="rounded-lg flex gap-2 flex-col items-center cursor-pointer"
          >
            <motion.div
              layoutId={`product-image-${index}`}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-lg"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={350}
                height={350}
                placeholder="blur"
                className="object-cover"
              />
            </motion.div>

            {/* Product details */}
            <div className="w-full">
              <h5 className="font-medium text-gray-600 text-lg">
                {product.name}
              </h5>

              <div className="flex gap-3 mt-2">
                <span className="text-[0.7rem] bg-(--light-green) py-1 px-3 rounded-xl">
                  {product.type}
                </span>

                <span className="text-[0.7rem] bg-(--primary-text) py-1 px-3 rounded-xl">
                  {product.category}
                </span>
              </div>
            </div>
          </li>
        ))}

        <motion.button className="bg-(--secondary-bg) py-3 flex items-center justify-center gap-4 rounded-lg mt-4 hover:bg-(--primary-bg)">
          <span className="font-semibold">See All Product</span>
        </motion.button>
      </ul>

      {/* product menu modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            onClick={() => setSelectedProduct(null)}
            className="inset-0 fixed h-dvh w-dvw flex items-center justify-center z-50"
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(10px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.2 }}
          >
            {/* main container */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-[80%] lg:w-[60%] h-auto bg-white flex flex-col p-4 rounded-md lg:flex-row relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* product Image */}
              <motion.div
                className="w-full p-3"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: clickPosition.x - window.innerWidth / 2,
                  y: clickPosition.y - window.innerHeight / 2,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.2, delay: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  x: clickPosition.x - window.innerWidth / 2,
                  y: clickPosition.y - window.innerHeight / 2,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Image
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="object-center rounded-md"
                  placeholder="blur"
                />
              </motion.div>

              {/* product details  */}
              <div className="w-full flex flex-col p-3 gap-3 overflow-hidden">
                <motion.h5
                  className="font-medium text-gray-600 text-xl lg:text-2xl"
                  initial={{ y: "200px", opacity: 0 }}
                  animate={{
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.2 },
                  }}
                >
                  {selectedProduct.name}
                </motion.h5>

                <motion.div
                  className="flex gap-3 mt-2"
                  initial={{ y: "200px", opacity: 0 }}
                  animate={{
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.2 },
                  }}
                >
                  <span className="text-[0.7rem] bg-(--light-green) py-1 px-3 rounded-xl">
                    {selectedProduct.type}
                  </span>

                  <span className="text-[0.7rem] bg-(--primary-text) py-1 px-3 rounded-xl">
                    {selectedProduct.category}
                  </span>
                </motion.div>
                <motion.p
                  className="text-[.7rem] lg:text-[0.9rem]"
                  initial={{ y: "200px", opacity: 0 }}
                  animate={{
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.2 },
                  }}
                >
                  {selectedProduct.description}
                </motion.p>
              </div>
              <div
                onClick={() => setSelectedProduct(null)}
                className="absolute bg-(--light-green) top-0 right-0 rounded-md p-1 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1.5 }}
                >
                  <HiOutlineXMark size={22} strokeWidth={2} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductList;

//  x: clickPosition.x - window.innerWidth / 2,
//  y: clickPosition.y - window.innerHeight / 2,
