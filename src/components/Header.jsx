import React from "react";
// Imports for the navigation bar styling
import {
  Navbar,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  PresentationChartLineIcon,
  UserCircleIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

// Imports the link component from react-router-dom, in order to handle navigation
import { Link, useLocation } from 'react-router-dom';


// Handles the Nav icons and their onClick and styling
export function DefaultPagination() {
  
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "white",
    onClick: () => setActive(index),

  });
  const [active, setActive] = React.useState(1);
  const currentPage = useLocation().pathname;

  // Update the active state based on the current route
  React.useEffect(() => {
    const activeIndex = navArray.findIndex((nav) => nav.link === currentPage);
    setActive(activeIndex !== -1 ? activeIndex + 1 : 1);
  }, [currentPage]);
  
  // Reusable NavIcons component for the navigation bar
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

  // Array of objects for the NavIcons component
  const navArray = [

    {
      link: "/about",
      icon: UserCircleIcon,
      index: 1,
    },
    {
      link: "/projects",
      icon: PresentationChartLineIcon,
      index: 2,
    },
    {
      link: "/",
      icon: HomeIcon,
      index: 3,
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
    {
      link: "/certs",
      icon: AcademicCapIcon,
      index: 6,
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
         {/* Maps through the navArray and returns the NavIcons component */}
        {navArray.map((nav) => (
          <NavIcons
            key={nav.index}
            link={nav.link}
            icon={nav.icon}
            index={nav.index}
          />
        ))}
      </div>
    </div>
  );
}

// Uses the Navbar component from material-tailwind-react to create the navigation bar, and imports the navArray and NavIcons component
function Navigation() {
  return (
    <div className="-m-6 max-h-[768px] w-full">
      <Navbar
        className="sticky bg-opacity-0 top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
        style={{ position: "fixed", border: "none", backgroundColor: "transparent" }}
      >
        <Typography color="blue-gray" className="text-xl font-normal text-myColor-3">
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

