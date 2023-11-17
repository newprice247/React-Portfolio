// import React from 'react'
// import { TypeAnimation } from 'react-type-animation'
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// // import {
// //     Card,
// //     CardHeader,
// //     CardBody,
// //     Typography,
// //     Avatar,
// // } from "@material-tailwind/react";

// // export default function Homepage() {
// //     return (
// //         <Card
// //             shadow={false}
// //             className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
// //         >
// //             <CardHeader
// //                 floated={false}
// //                 shadow={false}
// //                 color="transparent"
// //                 className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
// //             >
// //                 <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
// //             </CardHeader>
// //             <CardBody className="relative py-14 px-6 md:px-12">
// //                 <TypeAnimation
// //                     className='mt-40'
// //                     style={{ whiteSpace: 'pre-line', height: '500px', display: 'block' }}
// //                     sequence={[
// //                         `Line one\nLine Two\nLine Three\nLine Four\nLine Five

// // Line Seven`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
// //                         1000,
// //                         '',
// //                     ]}
// //                     repeat={Infinity}
// //                 />
// //                 <Typography variant="h5" className="mb-4 text-gray-400">
// //                     Tania Andrew
// //                 </Typography>
// //                 <Avatar
// //                     size="xl"
// //                     variant="circular"
// //                     alt="tania andrew"
// //                     className="border-2 border-white"
// //                     src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
// //                 />
// //             </CardBody>
// //         </Card>
// //     );
// // }

// export default function Homepage() {
//     const code = `
//     const myName = "Nathaniel Price"
//     const sayHello = () => {
//       console.log('Hello! My name is $ {myName} and I appreciate you checking out my portfolio!');
//     };

//     sayHello();

//     -- Hello! My name is Nathaniel Price and I appreciate you checking out my portfolio! --
//   `
//     return (
//         <>
//             <div
//                 className='h-[75.5vh]'
//             >
//                 <div className='code-block mt-40 text-myColor-3'>
//                     <SyntaxHighlighter language='javascript' style={docco}>
//                         {<TypeAnimation
//                         style={{
//                             whiteSpace: 'pre-line',
//                             height: '500px',
//                             display: 'block',
//                             textAlign: 'left',
//                             width: '30vw'
//                         }}
//                         sequence={[code, 100]}
//                         speed={20}
//                         omitDeletionAnimation={true}
//                         repeat={0}
//                     />}
//                     </SyntaxHighlighter>
                    
//                 </div>

//             </div>

//         </>
//     )
// }

import React, { useState, useEffect } from 'react';
// import TypeAnimation from 'react-type-animation';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeTypeAnimation = ({ code, speed}) => {
  const [animationCode, setAnimationCode] = useState('');

  useEffect(() => {
    const splitCode = code.split('');
    let animatedCode = '';

    splitCode.forEach((char, index) => {
      setTimeout(() => {
        animatedCode += char;
        setAnimationCode(animatedCode);
      }, index * speed);
    });
  }, [code, speed]);

  return (
    <SyntaxHighlighter language="javascript" style={vs2015} className="code-block">
      {animationCode}
    </SyntaxHighlighter>
  );
};

export default function Homepage() {
  const code = `
  // Establishing the professional identity
  const developerName = "Nathaniel Price";
  
  // Extending a formal welcome to the esteemed visitor
  const greetVisitor = () => {
    console.log('Dear visitor, I am' + developerName '\n\t\t\t—a seasoned web developer committed to excellence.');
    console.log("Welcome to my portfolio, \n\t\t\twhere precision meets innovation in the realm of web development.");
  };
  
  // Executing the refined welcome message
  greetVisitor();
  
  `;

  return (
    <>
    
      <div className='h-[75.5vh] w=[35vw] mt-[30px] grid grid-cols-3'>
        <div className='mt-[200px]' >
            <p className='text-white text-2xl'>Welcome</p>
            <h1 className='text-6xl text-light-blue-300 col-span-1'> I'm Nathaniel Price</h1>
        </div>
        <div id="codeBlock" className="mt-40 text-myColor-3 text-left col-span-2 hidden lg:block">
          <CodeTypeAnimation code={code} speed={10} repeat={0} />
        </div>
        <div className='col-span-2'>
            
        </div>
      </div>
    </>
  );
}