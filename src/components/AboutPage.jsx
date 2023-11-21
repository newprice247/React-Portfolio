import React from "react";
import nathanPic from "/nathanPic.jpg";
import { motion } from "framer-motion";


export default function AboutPage() {
  return (
    <>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap mt-40 justify-center items-center">
        <div
          className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex justify-center items-center"
        >
          <img
            alt="Nathan Price"
            className="object-cover items-center h-96 w-96 rounded-full"
            src={nathanPic}
          />
        </div>
        <div
          className="text-myColor-3 mt-5 w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3"
        >
          <h1 variant="h2" className="mb-10 text-5xl text-myColor-2">
            About Me
          </h1>
          <p>
            As a passionate Full Stack Web Developer with a specialization in the MERN stack, I bring a dynamic skill set and a relentless drive for success to every project I undertake. My journey in the realm of web development has equipped me with a comprehensive understanding of MongoDB, Express.js, React.js, and Node.js, allowing me to craft robust and scalable applications that seamlessly integrate front-end and back-end functionalities. I thrive on the challenges posed by cutting-edge technologies and have a proven track record of delivering high-quality solutions that meet and exceed client expectations.<br /><br />

            Beyond my technical expertise, I am recognized as a charismatic team player who fosters collaborative environments. My ability to communicate effectively and my knack for inspiring others make me an invaluable asset in group settings. An avid learner at heart, I am committed to staying ahead of industry trends and continuously expanding my skill set. I approach each project with a creative mindset, viewing challenges as opportunities for innovation. With a passion for creating impactful digital experiences, I am excited about the endless possibilities the world of web development has to offer. Let's build something extraordinary together!
          </p>
        </div>

      </motion.div>


    </>
  )
}