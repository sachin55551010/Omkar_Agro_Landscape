import { useState } from "react";
import { FaqList } from "../constants/faq_list";
import { FaAngleDown } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
const FAQSection = () => {
  const [faqList, setFaqList] = useState<number[]>([]);

  const handleClickBtn = (index: number) => {
    setFaqList((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };
  return (
    <div className="py-8 px-4 mt-10 bg-(--base-bg)">
      <h4 className="font-extrabold text-4xl lg:text-5xl text-(--secondary-bg) w-90 lg:w-150">
        {"Frequently asked questions".split("").map((item, index) => {
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              {item}
            </motion.span>
          );
        })}
      </h4>

      <ul className="flex flex-col gap-4 mt-8">
        {FaqList.map((item, index) => {
          const isOpen = faqList.includes(index);

          return (
            <li key={item.id} className="border-b py-8">
              <div
                onClick={() => handleClickBtn(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h6 className="font-bold text-xl text-(--dark-green)">
                  {item.qus}
                </h6>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  className={`${isOpen ? "opacity-100" : "opacity-30"}`}
                >
                  <FaAngleDown size={24} />
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="pt-3 text-(--secondary-bg)"
                      animate={{
                        y: [40, 0],
                        filter: ["blur(20px)", "blur(0px)"],
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {item.ans}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQSection;
