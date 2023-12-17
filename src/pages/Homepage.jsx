import React from 'react'

// Imports the type animation component from react-type-animation, in order to animate the text
import { TypeAnimation } from 'react-type-animation'

// Imports the motion component from framer-motion, which animates the loading of the page
import { motion } from 'framer-motion'


export default function Homepage() {
    
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: 10 }}
                transition={{ delay: 0.2, duration: 1 }}
                className='h-[75.5vh] flex flex-wrap items-center justify-center'
            >
                <div className='text-white text-2xl w-full sm:w-full md:w-full lg:w-full xl:w-1/2 '>
                    <p>Welcome</p>
                    <h1 className=' text-light-blue-300 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl'> I'm Nathaniel Price</h1>
                    <div className='text-myColor-3 md:text-2xl mt-2 text-1xl md:mt-5'>

                         {/* Uses the TypeAnimation component to animate the text below */}
                        <TypeAnimation
                            preRenderFirstString={false}
                            sequence={[
                                2000,
                                'Full Stack Web Developer',
                                1000,
                                'Avid learner',
                                1000,
                                'MERN Stack Developer',
                                1000,
                                'Problem solver',
                                1000,
                                'Team player',
                                1000,
                                'Creator',
                                1000,
                            ]}
                            speed={{ deleteSpeed: 100, typeSpeed: 100 }}
                            repeat={Infinity}
                        />
                    </div>

                </div>


            </motion.div>

        </>
    )
}