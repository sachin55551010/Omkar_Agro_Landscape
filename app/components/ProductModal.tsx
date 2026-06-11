import { useEffect } from "react";
import { useStateStore } from "../store/useStateStore";

const ProductModal = () => {
  const { isPorductModalOpen } = useStateStore();
  useEffect(() => {
    if (isPorductModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isPorductModalOpen]);
  return <div className="inset-0 fixed bg-red-400">ProductModal</div>;
};

export default ProductModal;
