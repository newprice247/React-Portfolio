
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Imports the icons from react-icons for the download button
import { AiOutlineDownload } from 'react-icons/ai';

// Imports the pdf viewer, styles, and worker from react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import pdf from "/npriceResume.pdf";
import { Document, Page, pdfjs } from "react-pdf";

// Sets the worker for the pdf viewer, which is required for it to work
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

// Exports the ResumePage component
export default function ResumePage() {
  // Set the initial width and scale of the pdf viewer
  const [width, setWidth] = useState(600);
  const [scale, setScale] = useState(1);

  // When the page loads, set the width and scale of the pdf viewer
  useEffect(() => {
    setWidth(window.innerWidth);
    calculateScale(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // When the window is resized, set the width and scale of the pdf viewer
  const handleResize = () => {
    setWidth(window.innerWidth);
    calculateScale(window.innerWidth);
  };

  // Calculates the scale of the pdf viewer based on the width of the window
  const calculateScale = (windowWidth) => {
    const maxWidth = 800; // Set the maximum width for scaling
    const scalePercentage = (windowWidth / maxWidth) * 100;
    const calculatedScale = scalePercentage / 100;
    setScale(calculatedScale);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={{ y: 10 }}
      transition={{ delay: 0.2, duration: 1 }}
      className='mt-40 '
    >
      <h1
        className="text-5xl text-myColor-3 text-center mt-50 w-full"
      >
        Resume
      </h1>

      {/* Download button for the resume */}
      <div className="flex justify-center relative mb-5">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md max-w-max mt-20"
        >
          <AiOutlineDownload className="inline-block mr-1" />
          Download Resume
        </a>
      </div>

       {/* Uses the pdf viewer from react-pdf to display the resume */}
      <Document file={pdf}>
        <Page pageNumber={1} scale={scale} />
      </Document>
      <p>
        Page 1 of 2
      </p>
      <Document file={pdf}>
        <Page pageNumber={2} scale={scale} />
      </Document>
      <p>
        Page 2 of 2
      </p>

      {/* Download button for the resume */}
      <div className="flex justify-center relative">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md max-w-max"
        >
          <AiOutlineDownload className="inline-block mr-1" />
          Download Resume
        </a>
      </div>

    </motion.div>
  );
}
