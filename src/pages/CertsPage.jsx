import React from 'react';
import { motion }from "framer-motion";

function Cert(props) {
  return (
      <div
      className="flex items-center justify-center flex-col gap-4 mb-[14rem]"
      >
          <img
          src={props.image}
          alt="image 1"
          className="h-1/2 w-1/2 object-cover"
        />
        <a
        className="text-white font-bold text-lg hover:underline hover:text-myColor-2 p-4 rounded-lg bg-myColor-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
        target="_blank"
        href={props.link}
        >
          View Certificate
        </a>
        <p
        className="text-myColor-3 text-3xl"
        >
          {props.title}
        </p>
        <p
        className="text-white text-lg px-2 lg:px-40 xl:px-60"
        >
          {props.description}
        </p>
      </div>
  );
}
 
export default function CertsPage() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    animate={{ y: 10 }}
    transition={{ delay: .3, duration: .7 }}>
      <h1
      className="text-myColor-3 text-5xl text-center mt-40 mb-20"
      >
        Certifications
      </h1>
        <Cert
        image="/certs/metaJavascriptCourse.png"
        link="https://coursera.org/share/ac84a3904cf55c35ccead553daeae9bc"
        title="Meta : Programming with JavaScript"
        description="This comprehensive JavaScript course, offered through Meta, encompassed core concepts such as functions, objects, arrays, variables, and diverse data types. Exploring the HTML DOM provided insights into dynamic web content manipulation, while the course delved into modern JavaScript technologies for interactive user experiences. Notably, the concluding segment equipped me with proficiency in testing code and crafting unit tests using Jest, enhancing my ability to ensure the reliability and functionality of JavaScript projects. This course has provided a robust foundation for navigating the intricacies of web development with JavaScript."
        />
        <Cert
        image="/certs/yaakovCourse.png"
        link="https://coursera.org/share/20fad3f50d48d679af46b3c54f68e3a9"
        title="HTML, CSS, and Javascript for Web Developers"
        description="This 'beginners guide' to the fundamentals of web design, offered through John Hopkins university and taught by Yaakov Chaikin, provided essential insights into web page coding. Beginning with the basics, I learned to craft modern web pages using HTML and CSS, gradually advancing to the point where I could code pages for automatic rearrangement and resizing based on the user's screen size. This skill set allowed me to create web pages that are seamlessly functional on both mobile phones and desktop computers, eliminating the need for 'pinch and zoom.' The course culminated in a thorough introduction to JavaScript, the ubiquitous and powerful language of the web. With JavaScript, I acquired the ability to build fully functional web applications employing Ajax to expose server-side functionality and data to end-users. This comprehensive course has equipped me with the tools to create dynamic and user-friendly web experiences."
        />
        <Cert
        image="/certs/UCFbadge.png"
        link="https://api.badgr.io/public/assertions/AB-YegeBQhKv4J1U-ihEUQ?identity__email=newprice247%40gmail.com"
        title="UCF Full Stack Web Development Bootcamp Certificate"
        description="This intensive, 24-week coding bootcamp, offered through the University of Central Florida, provided a comprehensive curriculum that equipped me with the skills to become a full-stack web developer. The course began with the fundamentals of web development, including HTML, CSS, and JavaScript, and gradually progressed to advanced topics such as Node.js, Express, and React. Throughout the course, I developed a strong foundation in computer science, learning to build and deploy web applications, and gained experience working with databases, APIs, and server-side technologies. The course required me to work with diverse teams on demanding timelines to build full functional web applications from start to finish. This comprehensive course has provided me with the skills and knowledge to develop and deploy full-stack web applications, and has equipped me with the tools to succeed in a career as a web developer."
        />
    </motion.div>
  );
}