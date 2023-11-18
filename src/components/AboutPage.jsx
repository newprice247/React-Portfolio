import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import nathanPic from "/nathanPic.jpg";
import { Link, useLocation } from 'react-router-dom';


export default function AboutPage() {
    return (
        <>
        <div className="mx-auto max-w-screen-md py-12">
          <Card className="mb-12 mt-12 overflow-hidden">
            <div>
              <img
                alt="Nathan Price"
                className="h-[50vh] w-[50vw] object-contain object-left"
                src={nathanPic}
              />
            </div>
          </Card>
        </div>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Nathaniel Price
        </Typography>
        
        </>     
    )
}