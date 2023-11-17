import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);
  const currentPage = useLocation().pathname;
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
      <Link
        as="li"
        to="/"
        variant="small"
        color="white"
        className={currentPage === '/' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
      >
          Home
      </Link>
      <Link
        as="li"
        to="/"
        variant="small"
        color="white"
        className={currentPage === '/' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
      >
          Projects
      </Link><Link
        as="li"
        to="/"
        variant="small"
        color="white"
        className={currentPage === '/' ? 'nav-link active p-1 font-normal' : 'nav-link p-1 font-normal'}
      >
          About
      </Link>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-100vw">
      <Navbar 
      variant="gradient"
      color="gray"
      className="sticky  from-myColor-1 to-gray-900  top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4" 
      style={{ position: 'fixed' }}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            color="white"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Nathaniel Price
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-20 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
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