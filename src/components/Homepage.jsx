import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

export default function Homepage() {
    return (
        <Card
            shadow={false}
            className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
                <TypeAnimation
                    className='mt-40'
                    style={{ whiteSpace: 'pre-line', height: '500px', display: 'block' }}
                    sequence={[
                        `Line one\nLine Two\nLine Three\nLine Four\nLine Five
    
Line Seven`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                        1000,
                        '',
                    ]}
                    repeat={Infinity}
                />
                <Typography variant="h5" className="mb-4 text-gray-400">
                    Tania Andrew
                </Typography>
                <Avatar
                    size="xl"
                    variant="circular"
                    alt="tania andrew"
                    className="border-2 border-white"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
            </CardBody>
        </Card>
    );
}

// export default function Homepage() {
//     return (
//         <>
//             <TypeAnimation
//                 className='mt-40'
//                 style={{ whiteSpace: 'pre-line', height: '500px', display: 'block' }}
//                 sequence={[
//                     `Line one\nLine Two\nLine Three\nLine Four\nLine Five
    
// Line Seven`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
//                     1000,
//                     '',
//                 ]}
//                 repeat={Infinity}
//             />
//         </>
//     )
// }