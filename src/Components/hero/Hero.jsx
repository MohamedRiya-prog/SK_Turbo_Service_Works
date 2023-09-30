import React from "react";

import CallIcon from "@mui/icons-material/Call";

const Hero = () => {
  return (
    <div className="text-center mt-4">
      <h2 className="font-poppins text-xs font-normal">
        "Celebrating{" "}
        <span className="text-mainYellow font-semibold text-base">
          40 Years
        </span>{" "}
        of Turbocharged Excellence!"
      </h2>
      <a href="tel:+919885645025" className="flex justify-center items-center">
        <button className="bg-mainYellow font-bold my-4 py-2 px-4 rounded flex justify-center items-center text-sm">
          <CallIcon /> Call Now
        </button>
      </a>
    </div>
  );
};

export default Hero;
