import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from "@material-tailwind/react";


export default function ResumePage() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    animate={{ y: 10 }}
    transition={{ delay: 0.2, duration: 1 }}
    className="resume-container text-white mt-40">
      <header>
        <h1>Nathaniel Price</h1>
        <p>Full Stack Web Developer</p>
        <address>
          2005 Lansing Street <br />
          Melbourne, FL 32935 <br />
          Email: newprice247@gmail.com <br />
          Phone: (321) 258-7592
        </address>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/nathaniel-price-4350a915a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/newprice247" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>

      <section className="section">
        <h2>Objective</h2>
        <p>
          Dedicated and skilled Full Stack Web Developer with expertise in the MERN stack.
          Passionate about creating efficient and scalable web applications to solve real-world problems.
          Proven ability to collaborate with cross-functional teams to deliver high-quality software solutions.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+), HTML5, CSS3</li>
          <li>React.js, Redux, HTML, CSS, Bootstrap, Material-UI</li>
          <li>Node.js, Express.js</li>
          <li>MongoDB, Mongoose</li>
          {/* ... */}
        </ul>
      </section>
    
    </motion.div>
  );
};