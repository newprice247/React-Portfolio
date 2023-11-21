import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  Card,
} from "@material-tailwind/react";

import { Link, useLocation } from 'react-router-dom';

import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
  PresentationChartLineIcon,
  UserCircleIcon,
  EnvelopeIcon,
  DocumentTextIcon
} from "@heroicons/react/24/outline";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 

export function SpeedDialWithTextOutside() {

 
  return (
    <div className=" h-[2.5rem] w-full">
      <div className="">
       
      </div>
    </div >

  );
}

function DefaultPagination() {
  const [active, setActive] = React.useState(1);
  const currentPage = useLocation().pathname;
 
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  const NavIcons = () => {
    return (
      <>
            <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
            >
                <IconButton {...getItemProps(1)} size="lg" className="rounded-full text-blue-400 hover:border-2 hover:border-myColor-3" >
                  <HomeIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
                </IconButton>
            </Link>
            <Link
            to="/about"
            className={currentPage === '/about' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
            >
            <IconButton {...getItemProps(2)} size="lg" className="rounded-full text-blue-400 hover:border-2 hover:border-myColor-3" >
              <UserCircleIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
              </IconButton>
            </Link>
            <Link
            to="/projects"
            className={currentPage === '/projects' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
            >
               <IconButton {...getItemProps(3)} size="lg" className="rounded-full text-blue-400 hover:border-2 hover:border-myColor-3" >
              <PresentationChartLineIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
              </IconButton>
            </Link>
            <Link
            to="/contact"
            className={currentPage === '/contact' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
            >
              <IconButton {...getItemProps(4)} size="lg" className="rounded-full text-blue-400 hover:border-2 hover:border-myColor-3" >
              <EnvelopeIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
              </IconButton>
            </Link>
            <Link
            to="/resume"
            className={currentPage === '/resume' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
            >
              <IconButton {...getItemProps(5)} size="lg" className="rounded-full text-blue-400 hover:border-2 hover:border-myColor-3" >
              <DocumentTextIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
              </IconButton>
            </Link>
      </>
    );
  }
  return (
    
    <div className="flex items-center gap-4">
      
      <div className="flex items-center gap-2">
            {currentPage === '/' ? (
              
              <NavIcons />
              
            ) : currentPage === '/about' ? (
              
              <NavIcons />
              
            ) : currentPage === '/projects' ? (
             
              <NavIcons />
            ) : currentPage === '/contact' ? (
              <NavIcons />
              
            ) : currentPage === '/resume' ? (
              <NavIcons />
              
            ) : null}
          
      </div>
      
    </div>
  );
}

function Navigation() {

  return (
    <div className="-m-6 max-h-[768px] w-full">
      
      <Navbar

        className="sticky bg-opacity-0  top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
        style={{ position: 'fixed', border: 'none', backgroundColor: 'transparent' }}
      >
        <Typography color="blue-gray" className="text-xl font-normal text-myColor-3">
                  Nathaniel Price
                </Typography>
        <div className="flex items-center justify-center text-blue-gray-900">
          <DefaultPagination />
          <div className="opacity-1 flex items-center justify-center gap-4">
            < SpeedDialWithTextOutside />


          </div>
        </div>
      </Navbar>
    </div>
  );
}



export default function Header() {
  return (
    <div>
      <Navigation />
    </div>
  );
}

// return (
//   <div className=" h-[2.5rem] w-full">
//     <div className="">
//       <SpeedDial placement="bottom">
//         <SpeedDialHandler>
//           <IconButton size="lg" className="rounded-full " >
//             {currentPage === '/' ? (
//               <HomeIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
//             ) : currentPage === '/about' ? (
//               <UserCircleIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
//             ) : currentPage === '/projects' ? (
//               <PresentationChartLineIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
//             ) : currentPage === '/contact' ? (
//               <EnvelopeIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
//             ) : null}
//           </IconButton>
          
//         </SpeedDialHandler>
//         <SpeedDialContent className="flex-row rounded-full ">
//           <Link
//             to="/"
//             //       variant="small"
//             //       color="white"
//             className={currentPage === '/' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
//           >
//             <SpeedDialAction className="m-3 h-16 w-16 bg-gray-900 text-blue-400 border-myColor-3">
//               <HomeIcon className="h-5 w-5" />
//               <Typography color="blue-gray" className="text-xs font-normal text-white">
//                 Home
//               </Typography>
//             </SpeedDialAction>
//           </Link>
//           <Link
//             to="/about"
//             //       variant="small"
//             //       color="white"
//             className={currentPage === '/about' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
//           >
//             <SpeedDialAction className="m-3 h-16 w-16 bg-gray-900 text-blue-400 border-myColor-3">
//               <UserCircleIcon className="h-5 w-5" />
//               <Typography color="blue-gray" className="text-xs font-normal text-white">
//                 About
//               </Typography>
//             </SpeedDialAction>
//           </Link>
//           <Link
//             to="/projects"
//             //       variant="small"
//             //       color="white"
//             className={currentPage === '/projects' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
//           >
//             <SpeedDialAction className="m-3 h-16 w-16 bg-gray-900 text-blue-400 border-myColor-3 ">
//               <PresentationChartLineIcon className="h-5 w-5" />
//               <Typography color="blue-gray" className="text-xs font-normal text-white">
//                 Projects
//               </Typography>
//             </SpeedDialAction>
//           </Link>
//           <Link
//             to="/contact"
//             //       variant="small"
//             //       color="white"
//             className={currentPage === '/contact' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
//           >
//             <SpeedDialAction className="m-3 h-16 w-16 bg-gray-900 text-blue-400 border-myColor-3 ">
//               <EnvelopeIcon className="h-5 w-5" />
//               <Typography color="blue-gray" className="text-xs font-normal text-white">
//                 Contact
//               </Typography>
//             </SpeedDialAction>
//           </Link>
//         </SpeedDialContent>
//       </SpeedDial>
//     </div>
//   </div >
