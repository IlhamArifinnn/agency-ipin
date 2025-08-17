import assets from "../assets/assets";
import Title from "./Title";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "40ae3db1-f6b9-42fb-9208-d92a2e88d5ff");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4sm
    px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Contact Us"
        desc="Get in touch with us for any inquiries or support."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        onSubmit={onSubmit}
      >
        <div className="grid gap-1">
          <label htmlFor="name" className="mb-2 text-sm font-medium">
            Your Name
          </label>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="Icon person" />
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 text-sm outline-none"
              placeholder="Enter Your Name"
              required
            />
          </div>
        </div>

        <div className="grid gap-1">
          <label htmlFor="email" className="mb-2 text-sm font-medium">
            Your Email
          </label>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="Icon person" />
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-3 text-sm outline-none"
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 text-sm font-medium">
            Your Message
          </label>
          <textarea
            rows={7}
            id="message"
            name="message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 "
            placeholder="Enter Your Message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Send Message{" "}
          <img src={assets.arrow_icon} alt="Arrow icon" className="w-4" />
        </button>
      </motion.form>
    </motion.section>
  );
};

export default ContactUs;
