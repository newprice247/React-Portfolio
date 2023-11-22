import React, { useState } from "react";
import { motion } from "framer-motion";

// Import the `useForm` hook from the `@formspree/react` package in order to handle the form submission and send the data to Formspree, who will then send it to my email address
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    // Formspree hook
    const [state, handleSubmit] = useForm("xoqozbdv");

    // Handles form validation and sends an error message if the user tries to submit the form without filling out all the required fields
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const handleEmailBlur = (e) => {
        if (e.target.value === "") {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };
    const handleSubjectBlur = (e) => {
        if (e.target.value === "") {
            setSubjectError(true);
        } else {
            setSubjectError(false);
        }
    };
    const handleMessageBlur = (e) => {
        if (e.target.value === "") {
            setMessageError(true);
        } else {
            setMessageError(false);
        }
    };

    if (state.succeeded) {
        return alert("Thank you for your message!");
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex lg:flex-row flex-col justify-center items-center h-full"
        >
            <section className="bg-opacity-0 dark:bg-gray-900 ">
                <div className=" px-4 mx-auto max-w-screen-md mt-40 ">
                    <h2 class="mb-4 text-4xl  text-center text-myColor-3 ">Contact Me</h2>
                    <p className="font-light text-center text-gray-200 sm:text-xl mb-10">
                        Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                        Simply fill out the form and send me an email!
                    </p>
                    <form
                        action="https://formspree.io/f/xoqozbdv"
                        className="space-y-8 mb-10 lg:mb-0"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                                    emailError ? "border-red-500" : ""
                                }`}
                                placeholder="name@flowbite.com"
                                required
                                onBlur={handleEmailBlur}
                            />
                            {emailError && (
                                <p className="text-red-500 text-sm">Email is required</p>
                            )}
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                                    subjectError ? "border-red-500" : ""
                                }`}
                                placeholder="Let us know how we can help you"
                                required
                                onBlur={handleSubjectBlur}
                            />
                            {subjectError && (
                                <p className="text-red-500 text-sm">Subject is required</p>
                            )}
                            <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-400"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                name="message"
                                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                                    messageError ? "border-red-500" : ""
                                }`}
                                placeholder="Leave a comment..."
                                onBlur={handleMessageBlur}
                            ></textarea>
                            {messageError && (
                                <p className="text-red-500 text-sm">Message is required</p>
                            )}
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-400 sm:w-fit hover:bg-myColor-3 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300"
                            disabled={state.submitting}
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
            <div className="flex flex-col justify-center items-center gap-6 mt-0 md:mt-40  md:ml-10 md:pl-20 md:py-10">
                <h2 className="text-2xl text-myColor-3">Email:</h2>
                <div className="text-white hover:text-blue-500">
                    <a href="mailto:newprice247@gmail.com">newprice247@gmail.com</a>
                </div>

                <h2 className="text-2xl text-myColor-3">Phone:</h2>
                <div className="text-white hover:text-blue-500">
                    <a href="tel:1-404-668-5726">(321) 258-7592</a>
                </div>
                <h2 className="text-2xl text-myColor-3">LinkedIn:</h2>
                <div className="text-white hover:text-blue-500">
                    <a href="https://www.linkedin.com/in/nathaniel-price-7a8b0a1b5/">Nathaniel Price</a>
                </div>
                <h2 className="text-2xl text-myColor-3">GitHub:</h2>
                <div className="text-white hover:text-blue-500">
                    <a href="https://github.com/newprice247">newprice247</a>
                </div>
            </div>
        </motion.div>
    );
}
