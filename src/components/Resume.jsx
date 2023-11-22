// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Typography } from "@material-tailwind/react";
// import { AiOutlineDownload } from 'react-icons/ai';

// import pdf from "/npriceResume.pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


// export default function ResumeNew() {
//   const [width, setWidth] = useState(600);
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//     calculateScale(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleResize = () => {
//     setWidth(window.innerWidth);
//     calculateScale(window.innerWidth);
//   };

//   const calculateScale = (windowWidth) => {
//     const maxWidth = 800; // Set the maximum width for scaling
//     const scalePercentage = (windowWidth / maxWidth) * 100;
//     const calculatedScale = scalePercentage / 100;
//     setScale(calculatedScale);
//   };

//   return (
//     <div>
//       <div className="resume-section mt-40">
//         <div className="flex justify-center relative">
//           <a
//             href={pdf}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md max-w-max"
//           >
//             <AiOutlineDownload className="inline-block mr-1" />
//             Download CV
//           </a>
//         </div>

//         <div>
//           <Document file={pdf} className="flex justify-center">
//             <Page pageNumber={1} scale={scale} />
//           </Document>
//         </div>

//         <div className="flex justify-center relative">
//           <a
//             href={pdf}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md max-w-max"
//           >
//             <AiOutlineDownload className="inline-block mr-1" />
//             Download CV
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typography } from "@material-tailwind/react";
import { AiOutlineDownload } from 'react-icons/ai';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import pdf from "/npriceResume.pdf";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function ResumePage() {


  const [width, setWidth] = useState(600);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
    calculateScale(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    calculateScale(window.innerWidth);
  };

  const calculateScale = (windowWidth) => {
    const maxWidth = 800; // Set the maximum width for scaling
    const scalePercentage = (windowWidth / maxWidth) * 100;
    const calculatedScale = scalePercentage / 100;
    setScale(calculatedScale);
  };

  return (
    <div
      className='mt-40 '
    >
      <div className="flex justify-center relative">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md max-w-max"
        >
          <AiOutlineDownload className="inline-block mr-1" />
          Download CV
        </a>
      </div>
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
      <div className="flex justify-center relative">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md max-w-max"
        >
          <AiOutlineDownload className="inline-block mr-1" />
          Download CV
        </a>
      </div>

    </div>
  );
}
