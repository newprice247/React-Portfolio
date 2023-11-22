import React from "react";
import {
  Navbar,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { Link, useLocation } from 'react-router-dom';

import {
  HomeIcon,
  PresentationChartLineIcon,
  UserCircleIcon,
  EnvelopeIcon,
  DocumentTextIcon
} from "@heroicons/react/24/outline";

function DefaultPagination() {
  const [active, setActive] = React.useState(1);
  const currentPage = useLocation().pathname;

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "white",
    onClick: () => setActive(index),
  });
  
  const NavIcons = (props) => {

    return (
      <>
        <Link
          to={props.link}
          className= "p-1 font-normal"
        >
          <IconButton
            {...getItemProps(props.index)}
            size="lg"
            className="rounded-full text-blue-400 hover:border-2 hover:border-myColor-3"
          >
            <props.icon className="h-5 w-5 transition-transform group-hover:scale-125 group-hover:text-blue-300" />
          </IconButton>
        </Link>
      </>
    );
  };

  const navArray = [
    {
      link: "/about",
      icon: UserCircleIcon,
      index: 2,
    },
    {
      link: "/projects",
      icon: PresentationChartLineIcon,
      index: 3,
    },
    {
      link: "/",
      icon: HomeIcon,
      index: 1,
    },
    
    {
      link: "/resume",
      icon: DocumentTextIcon,
      index: 4,
    },
    {
      link: "/contact",
      icon: EnvelopeIcon,
      index: 5,
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {navArray.map((nav) => (
          <NavIcons
            link={nav.link}
            icon={nav.icon}
            index={nav.index}
          />
        ))}
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="-m-6 max-h-[768px] w-full">
      <Navbar
        className="sticky bg-opacity-0 top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
        style={{ position: "fixed", border: "none", backgroundColor: "transparent" }}
      >
        <Typography color="blue-gray" className="text-xl font-normal text-myColor-3">
          Nathaniel Price
        </Typography>
        <div className="flex items-center justify-center text-blue-gray-900">
          <DefaultPagination />
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
