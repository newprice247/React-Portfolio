import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: 10 }}
  transition={{ delay: 0.2, duration: 0.5 }}
         className="flex md:flex-row flex-col justify-center items-center h-full">
            <h1 className="text-4xl text-myColor-3 mb-6 mt-40">Contact Me</h1>
            <div className="flex flex-col justify-center items-center gap-6 mt-0 md:mt-40 md:border-l-4 md:border-myColor-2 md:ml-10 md:pl-20 md:py-10">
                <h2 className="text-2xl text-myColor-3">Email:</h2>
                <div className="text-white hover:text-blue-500">
                    <a href="mailto:newprice247@gmail.com">newprice247@gmail.com</a>
                </div>

                <h2 className="text-2xl text-myColor-3">Phone:</h2>
                <div  className="text-white hover:text-blue-500">
                    <a href="tel:1-404-668-5726">(321) 258-7592</a>
                </div>
                <h2 className="text-2xl text-myColor-3">LinkedIn:</h2>
                <div  className="text-white hover:text-blue-500">
                    <a href="https://www.linkedin.com/in/nathaniel-price-7a8b0a1b5/">Nathaniel Price</a>
                </div>
                <h2 className="text-2xl text-myColor-3">GitHub:</h2>
                <div  className="text-white hover:text-blue-500">
                    <a href="https://github.com/newprice247">newprice247</a>
                </div>
            </div>
        </motion.div>
    );
}

