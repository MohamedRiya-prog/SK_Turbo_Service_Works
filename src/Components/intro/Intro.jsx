import React from "react";

import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <p className="px-4 font-semibold font-poppins text-sm">Why Choose Us</p>
      <div className="flex flex-1 p-4 items-center">
        <div className="border-r border-gray-400 p-2">
          <p className="font-normal text-xs">Experience</p>
          <p className="text-[6px] text-justify">
            For over three and a half decades, we've been at the forefront of
            our industry, offering unparalleled expertise. Our 40 years of
            dedication ensure that when you choose us, you're choosing a legacy
            of excellence.
          </p>
        </div>
        <div className="p-4 flex flex-col">
          <p className="font-normal text-xs">
            A Tradition of Certified Excellence
          </p>
          <p className="text-[6px] text-justify">
            we pride ourselves on our team of trained certified professionals.
            Our longevity and quality stand as a testament to our unwavering
            commitment to excellence. Dedicated to Diesel Motors and turbochargers. For over
            four decades, our certified professionals blend
            traditional techniques with modern diagnostics to deliver impeccable
            service.
          </p>
          <Link to="/aboutus" className="flex pt-2 justify-end">
            <button className="bg-mainYellow p-1 text-[10px] rounded">About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
