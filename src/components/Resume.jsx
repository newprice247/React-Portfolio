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
      
    
    </motion.div>
  );
};