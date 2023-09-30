import React from "react";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="bg-mainBlue flex flex-col p-4 text-white font-poppins text-xs">
      <div className="flex">
        <p className="pb-2 flex-1">
          <span className="underline">Address: </span>
          Pillar no. 140 Bantia Furniture lane Attapur, 048, Ring Road,
          Hyderabad, Telangana 500048, India
        </p>
        <div className="flex flex-1 justify-center items-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100086701952001&mibextid=9R9pXO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/skturboservice_hyderabad_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/@shaikfareed6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
      <p>
        Contact Us -{" "}
        <a href="tel:+919885645025" className="underline text-mainYellow">
          +91 98856 45025
        </a>
      </p>
    </div>
  );
};

export default Footer;
