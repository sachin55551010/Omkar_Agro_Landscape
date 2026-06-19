"use client";
import service from "../../public/service.jpg";
import { motion } from "motion/react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { Loader } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      );
      toast.success("Message send successfully");
    } catch (error) {
      console.log("send email error : ", error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    )
      return toast.error("All fields are required");

    sendEmail();
  };

  const heading: string = "GET IN TOUCH";

  return (
    <div className="min-h-dvh max-w-dvw">
      {/* heading bg */}
      <div className="relative h-100">
        {/* Background Image */}
        <Image
          src={service}
          alt="Service Background"
          fill
          priority
          placeholder="blur"
          className="object-cover"
        />

        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end p-2">
          <div className="mb-8 flex gap-2 text-lg font-semibold">
            <Link href="/">
              <h4 className="border-r-2 pr-2 text-gray-400">Home</h4>
            </Link>

            <Link href="/services">
              <h4 className="text-gray-400">Service</h4>
            </Link>
          </div>

          {/* Animated Heading */}
          <div className="mb-8 flex flex-wrap text-gray-200">
            {heading.split("").map((text, index) => (
              <motion.h1
                key={`${text}-${index}`}
                className="flex text-5xl font-semibold tracking-wide text-gray-300 lg:text-6xl"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {text === " " ? "\u00A0" : text}
              </motion.h1>
            ))}
          </div>
        </div>
      </div>
      {/* contact details */}
      <div className="p-2 mt-12 ">
        <motion.h4
          className="text-5xl lg:text-6xl font-bold text-(--dark-green) tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Let&apos;s Grow
        </motion.h4>
        <motion.h4
          className="text-4xl lg:text-5xl text-(--dark-green) italic tracking-wider w-fit mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Something Beautiful
        </motion.h4>
        <motion.div
          className="h-[.2rem] w-full bg-[linear-gradient(to_right,#374836,#7f8f80,#f9faf2)] lg:w-[40%] mt-5 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
          style={{ originX: 0 }}
        ></motion.div>

        <motion.p
          className="mt-16 text-(--main-text-color)"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          Whether you&apos;re dreaming of a lush garden retreat or a
          low-maintenance lawn we&apos;re here to make it real. Share your
          vision with us.
        </motion.p>

        {/* contact info */}
        <section className="mt-10">
          <motion.h1
            className="font-heading text-4xl font-semibold text-(--dark-green) tracking-tighter italic"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Omkar Agro Landscape
          </motion.h1>

          {/* contat info section */}
          <div className="flex flex-col h-auto lg:flex-row gap-8 mt-14 p-5 shadow-[0px_0px_5px_rgba(0,0,0,.3)] rounded-lg">
            {/* contact info */}
            <div className="flex flex-col flex-1 gap-8 bg-(--dark-green) p-4 rounded-lg text-gray-300">
              <h4 className="font-bold text-xl lg:text-2xl">
                Contact Information
              </h4>
              <p>Have a project in mind? We are here to help you design it.</p>
              <div className="flex items-center gap-2 mt-4">
                <FaPhone />
                <h6>9876543210</h6>
              </div>

              <div className="flex items-center gap-2">
                <IoMdMail />
                <h6>sample@gmail.com</h6>
              </div>
              <div className="flex items-center gap-2">
                <MdLocationPin />
                <p>Shimla hp</p>
              </div>

              <div className="flex gap-4">
                <motion.span
                  whileInView={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    repeat: Infinity,
                    ease: "easeIn",
                    repeatDelay: 1,
                  }}
                >
                  <FaFacebook size={24} className="text-(--secondary-bg)" />
                </motion.span>

                <motion.span
                  whileInView={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    repeat: Infinity,
                    ease: "easeIn",
                    repeatDelay: 1,
                  }}
                >
                  <IoLogoWhatsapp size={25} className="text-(--secondary-bg)" />
                </motion.span>

                <motion.span
                  whileInView={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    repeat: Infinity,
                    ease: "easeIn",
                    repeatDelay: 1,
                  }}
                >
                  <MdEmail size={25} className="text-(--base-color)" />
                </motion.span>
              </div>
            </div>

            {/* form */}
            <form
              onSubmit={handleFormSubmit}
              className=" flex-1 flex flex-col gap-8"
            >
              <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-8">
                <label
                  htmlFor=""
                  className="flex flex-col gap-2 text-(--secondary-text-color) w-full"
                >
                  Your Name*
                  <input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    className="border h-10 rounded-lg border-(--secondary-text-color) pl-4 outline-0"
                    placeholder="Enter Name"
                    required
                  />
                </label>

                <label
                  htmlFor=""
                  className="flex flex-col gap-2 text-(--secondary-text-color) w-full"
                >
                  Your Email*
                  <input
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="email"
                    className="border h-10 rounded-lg border-(--secondary-text-color) pl-4 outline-0"
                    placeholder="Enter Email"
                  />
                </label>
              </div>

              <label
                htmlFor=""
                className="w-full flex flex-col gap-3 text-(--secondary-text-color)"
              >
                Message*
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  name=""
                  id=""
                  className="border w-full rounded-lg h-50 p-3 outline-0"
                  placeholder="Enter Message"
                ></textarea>
              </label>

              <button
                className={`bg-(--dark-green) text-gray-300 py-3 rounded-lg ${isLoading ? "opacity-40 cursor-not-allowed" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Loader />
                    </motion.div>

                    <span>Sending...</span>
                  </div>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
