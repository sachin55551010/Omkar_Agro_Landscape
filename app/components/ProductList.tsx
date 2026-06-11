"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ProductListData, product_list_obj } from "../constants/product_list";
import { RxCross2 } from "react-icons/rx";
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
          <HiOutlineArrowLongRight size={26} />
        </motion.button>
      </ul>

      <AnimatePresence>
        {selectedProduct && (
          <div
            onClick={() => setSelectedProduct(null)}
            className="inset-0 h-dvh w-dvw fixed flex items-center justify-center backdrop-blur-lg"
          >
            {/* modal container */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white py-4 w-[70%] h-120 rounded-md relative md:w-[40%] lg:w-155 lg:h-79"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* image section */}
              <motion.div
                className="flex items-center justify-center lg:absolute lg:top-0 lg:left-2"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: clickPosition.x - window.innerWidth / 2,
                  y: clickPosition.y - window.innerHeight / 2,
                }}
                exit={{
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
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={300}
                  height={150}
                  className="object-cover rounded-md mt-2"
                />
              </motion.div>

              {/* product detail section */}
              <motion.div className="px-6 mt-2 flex flex-col gap-3 absolute lg:w-75 lg:h-75 lg:top-0 lg:right-[10] text-2xl">
                <motion.h5
                  className="font-medium text-gray-600"
                  initial={{ opacity: 0, scale: 1, y: 100 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  {selectedProduct.name}
                </motion.h5>

                <motion.div
                  className="flex gap-3 mt-2"
                  initial={{ opacity: 0, scale: 1, y: 100 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span className="text-[0.7rem] bg-(--light-green) py-1 px-3 rounded-xl">
                    {selectedProduct.type}
                  </span>

                  <span className="text-[0.7rem] bg-(--primary-text) py-1 px-3 rounded-xl">
                    {selectedProduct.category}
                  </span>
                </motion.div>
                <motion.p
                  className="text-[.8rem]"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
                  transition={{ duration: 1.2 }}
                >
                  {selectedProduct.description}
                </motion.p>
              </motion.div>

              {/* cross button */}
              <motion.div
                onClick={() => setSelectedProduct(null)}
                className="absolute top-[-10] right-[-10] bg-(--light-green) p-1 rounded-md"
              >
                <RxCross2
                  size={22}
                  className="text-zinc-600"
                  strokeWidth={0.5}
                />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductList;

//  x: clickPosition.x - window.innerWidth / 2,
//  y: clickPosition.y - window.innerHeight / 2,
