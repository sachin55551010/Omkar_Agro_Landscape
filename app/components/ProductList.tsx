"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ProductListData, product_list_obj } from "../constants/product_list";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

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
      <h4 className="text-4xl font-bold text-zinc-500">Products</h4>
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
              className="w-full"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={350}
                height={350}
                className="w-full max-w-85 h-auto rounded-lg object-cover"
              />
            </motion.div>

            {/* Product details */}
            <div className="w-full">
              <h5 className="font-medium text-gray-600">{product.name}</h5>

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
            transition={{ duration: 0.5 }}
          >
            {/* main container */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-[80%] lg:w-[60%] h-auto bg-white flex flex-col p-4 rounded-md lg:flex-row relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
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
                  transition: { duration: 0.8, delay: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  x: clickPosition.x - window.innerWidth / 2,
                  y: clickPosition.y - window.innerHeight / 2,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="object-center rounded-md"
                />
              </motion.div>

              {/* product details  */}
              <div className="w-full flex flex-col p-3 gap-3 overflow-hidden">
                <motion.h5
                  className="font-medium text-gray-600 text-lg"
                  initial={{ y: "200px", opacity: 0 }}
                  animate={{
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.5 },
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
                    transition: { duration: 0.5, delay: 0.7 },
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
                  className="text-[.7rem]"
                  initial={{ y: "200px", opacity: 0 }}
                  animate={{
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.9 },
                  }}
                >
                  {selectedProduct.description}
                </motion.p>
              </div>
              <div
                onClick={() => setSelectedProduct(null)}
                className="absolute bg-(--light-green) top-0 right-0 rounded-md p-1 cursor-pointer"
              >
                <HiOutlineXMark size={22} strokeWidth={2} />
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
