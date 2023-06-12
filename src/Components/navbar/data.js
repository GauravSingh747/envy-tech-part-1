import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/services",
    text: "Services",
  },
  {
    id: 4,
    url: "/solutions",
    text: "Solutions",
  },
  {
    id: 5,
    url: "/profile",
    text: "Portfolio",
  },
  {
    id: 6,
    url: "/profile",
    text: "Blog",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.youtube.com/@turnkeyreality12",
    icon: <IoLogoYoutube />,
  },
];
