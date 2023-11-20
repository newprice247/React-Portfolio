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
  EnvelopeIcon
} from "@heroicons/react/24/outline";

export function SpeedDialWithTextOutside() {

  const currentPage = useLocation().pathname;
  return (
    <div className=" h-[2.5rem] w-full">
      <div className="">
        <SpeedDial placement="bottom">
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full " >
              {currentPage === '/' ? (
                <HomeIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
              ) : currentPage === '/about' ? (
                <UserCircleIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
              ) : currentPage === '/projects' ? (
                <PresentationChartLineIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
              ) : currentPage === '/contact' ? (
                <EnvelopeIcon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
              ) : null}
            </IconButton>
            
          </SpeedDialHandler>
          <SpeedDialContent className="flex-row rounded-full ">
            <Link
              to="/"
              //       variant="small"
              //       color="white"
              className={currentPage === '/' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
            >
              <SpeedDialAction className="m-3 h-16 w-16">
                <HomeIcon className="h-5 w-5" />
                <Typography color="blue-gray" className="text-xs font-normal">
                  Home
                </Typography>
              </SpeedDialAction>
            </Link>
            <Link
              to="/about"
              //       variant="small"
              //       color="white"
              className={currentPage === '/about' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
            >
              <SpeedDialAction className="m-3 h-16 w-16">
                <UserCircleIcon className="h-5 w-5" />
                <Typography color="blue-gray" className="text-xs font-normal">
                  About
                </Typography>
              </SpeedDialAction>
            </Link>
            <Link
              to="/projects"
              //       variant="small"
              //       color="white"
              className={currentPage === '/projects' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
            >
              <SpeedDialAction className="m-3 h-16 w-16">
                <PresentationChartLineIcon className="h-5 w-5" />
                <Typography color="blue-gray" className="text-xs font-normal">
                  Projects
                </Typography>
              </SpeedDialAction>
            </Link>
            <Link
              to="/contact"
              //       variant="small"
              //       color="white"
              className={currentPage === '/contact' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
            >
              <SpeedDialAction className="m-3 h-16 w-16">
                <EnvelopeIcon className="h-5 w-5" />
                <Typography color="blue-gray" className="text-xs font-normal">
                  Contact
                </Typography>
              </SpeedDialAction>
            </Link>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div >

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