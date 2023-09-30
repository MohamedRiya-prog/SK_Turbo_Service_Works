import React from "react";

import {
  Footer,
  Gallery,
  Googlereviews,
  Header,
  Hero,
  Youtube,
  Imagecarousel,
  Intro,
} from "../Components";

const Contact = () => {
  return (
    <div className="flex font-poppins flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <p className="font-semibold font-poppins text-sm mt-4 px-4">Contacts</p>
        <p className="p-4 text-xs">
          Name: <br />
          Mobile:
        </p>
        <iframe
          title="SK Turbo Service Works Location"
          className="w-full h-96"
          frameBorder="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.967176089836!2d78.42486007598283!3d17.36531240343906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb976f8e8cf0cf%3A0xa26f6f08966c1a35!2sSK%20TURBO%20SERVICE!5e0!3m2!1sen!2sae!4v1696075218703!5m2!1sen!2sae"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
