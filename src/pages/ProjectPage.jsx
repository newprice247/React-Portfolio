

import React from "react";
import Project from "../components/Project";
import { motion } from "framer-motion"

// Project data for the Project component that will be rendered in the ProjectPage component
const projects = [
    {
        projectName: "Sutton Place Hair Salon",
        projectDescription: "Sutton Place Hair Salon is a full-service salon that offers a wide range of hair care services. The website is designed to be responsive and mobile-friendly, and features a clean, modern design that reflects the salon's upscale aesthetic.",
        projectImage: "/images/suttonPlace.png",
        projectLink: "https://github.com/newprice247/SuttonPlace",
        projectLink2: "https://suttonplacehairsalon.com/",
        
    },
    {
        projectName: "PWA-Text-Editor",
        projectDescription: "The goal of this project was to build a text editor that runs in the browser. The app is a single-page application that features a number of data persistance techniques that serve as redundancyies in the case one of the data storing options is not supported by the browser, and can function offline.",
        projectImage: "/images/texteditor1.png",
        projectLink: "https://github.com/newprice247/PWA-Text_Editor",
        projectLink2: "https://pwa-text-editor-q3bk.onrender.com",
    },
    {
        projectName: "F2F Blog",
        projectDescription: "Presenting: F2F Blog! Our blog offers educational content, tutorials, and resources that cater to coders of all levels. Whether you're just starting or seeking to master a specific programming language, we've got you covered.",
        projectImage: "/images/f2fblog.png",
        projectLink: "https://github.com/newprice247/F2F-Blog",
        projectLink2: "https://f2f-blog-ad8f414d0b59.herokuapp.com/",
    },
    {
        projectName: "Social Network API",
        projectDescription: "The goal of this project was to build an API for a social network web application that uses Express.js for routing, and a MongoDB database that stores the data by utilizing the Mongoose ODM library. The app will offer a place where users can share their thoughts, react to freinds' thoughts, and create a friend list.",
        projectImage: "/images/socialNetwork.png",
        projectLink: "https://github.com/newprice247/Social-Network-API",
        projectLink3: "https://drive.google.com/file/d/1EQ9JkRFMkT_i2WfHXY2itFFuET1eLpMo/view",
    },
    {
        projectName: "Employee Tracker",
        projectDescription: "Employee Tracker is a command-line application that uses Node.js, Inquirer, and MySQL to manage a company's employee database.",
        projectImage: "/images/employeeTracker.gif",
        projectLink: "https://github.com/newprice247/Employee-Tracker",
        projectLink3: "https://drive.google.com/file/d/1TrxnsZv5zZhxFxpnwEMd-gijA4BfQGOi/view",
    },
    {
        projectName: "E Commerce Back End",
        projectDescription: "A Node.js application that uses Express.js API and Sequelize to interact with a MySQL database. The app allows the user to create, read, update, and delete data from the database using GET, POST, PUT, and DELETE routes.",
        projectImage: "/images/eCommerce.png",
        projectLink: "https://github.com/newprice247/E-Commerce-Back-End",
        projectLink3: "https://drive.google.com/file/d/1STiGIJiF43sKlfpDXGPgdc_MC4mh00Tn/view",
    },
    {
        projectName: "Note Taker",
        projectDescription: "Note-Taker is a user-friendly note-taking app that simplifies the process of jotting down, organizing, and managing your thoughts, ideas, and tasks. With Note-Taker, you can effortlessly create, edit, save, and delete notes, ensuring that you have a digital workspace that adapts to your needs.",
        projectImage: "/images/noteTaker.gif",
        projectLink: "https://github.com/newprice247/Note-Taker",
        projectLink2: "https://note-taker-newprice247-e6c2f2c3bf4d.herokuapp.com/notes",
    },
    {
        projectName: "Weather Dashboard",
        projectDescription: "The Weather Dashboard is a simple weather app that allows the user to search for a city and view the current weather conditions as well as the five-day forecast. The app uses the OpenWeather API to retrieve weather data for cities.",
        projectImage: "/images/weatherDashboard.png",
        projectLink: "https://github.com/newprice247/Weather-Dashboard",
        projectLink2: "https://newprice247.github.io/Weather-Dashboard/",
    },
    {
        projectName: "Work Day Scheduler",
        projectDescription: "The Work Day Scheduler is a simple calendar application that allows the user to save events for each hour of the day. The app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.",
        projectImage: "/images/workDayScheduler.png",
        projectLink: "https://github.com/newprice247/Work-Day-Scheduler",
        projectLink2: "https://newprice247.github.io/Work-Day-Scheduler/",
    },
    {
        projectName: "Bust A Movie",
        projectDescription: "Bust A Movie is a movie search engine that allows users to search for movies by title. The app uses the Open Movie Database API to retrieve movie data for the user's search query",
        projectImage: "/images/bustAMovie.png",
        projectLink: "https://github.com/newprice247/Bust-A-Movie",
        projectLink2: "https://newprice247.github.io/Bust-A-Movie/",
    },
    {
        projectName: "Code Quiz",
        projectDescription: "This Code Quiz app is a timed quiz on JavaScript fundamentals that stores high scores so that the user can gauge their progress compared to their peers",
        projectImage: "/images/codeQuiz.png",
        projectLink: "https://github.com/newprice247/Code-Quiz-Mod-4",
        projectLink2: "https://newprice247.github.io/Code-Quiz-Mod-4/",
    },
    {
        projectName: "Jobfinder",
        projectDescription: "JobFinder is a job search engine that allows users to search for jobs by title and location. The app uses a handcrafted API to retrieve job data for the user's search query.",
        projectImage: "/images/jobfinder.png",
        projectLink: "https://github.com/newprice247/Jobfinder",
        projectLink2: "https://project3mernstack-c25ab63e2028.herokuapp.com/",
    },
];

// Framer motion variants for the Project component that animates the component when it is rendered
const cardVariants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 50,
            rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
};

// Exports the ProjectPage component
export default function ProjectPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            variants={cardVariants}
            animate={{ y: 50 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-wrap items-center justify-center gap-6">
                <h1
                className="text-5xl text-myColor-3 text-center mt-40 w-full"
                >
                    Projects
                </h1>
                {/* Maps through the projects array and returns the Project component */}
            {projects.map((project) => (
                <Project
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    projectImage={project.projectImage}
                    projectLink={project.projectLink}
                    projectLink2={project.projectLink2}
                    projectLink3={project.projectLink3}
                />
            ))}
        </motion.div>
    );
}
