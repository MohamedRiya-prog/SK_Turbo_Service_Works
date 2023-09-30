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

const Aboutus = () => {
  return (
    <div>
      <Header />
      <div className="p-4 font-poppins">
        <h2 className="font-poppins font-bold text-center text-md py-4">
          About SK Turbo Service Works
        </h2>
        <h2 className="text-md font-semibold mt-6 mb-2">Founder's Bio</h2>
        <p className="text-xs text-justify">
          Mr. Shaik Fareed is the esteemed founder of SK Turbo Service Works and
          an undisputed stalwart in the automotive realm. With a professional
          journey spanning over four impressive decades, his foundational years
          were spent contributing significantly to both government and private
          automotive sectors. It was at institutions like the Republic Forge
          Company Ltd where he honed his skills and cultivated a specialized
          understanding of the industry's intricacies. After a commendable
          tenure serving as an Assistant Diesel Motor Mechanic since 1981, his
          passion and commitment led him to establish SK Turbo Service Works in
          Hyderabad, translating his expansive knowledge into an enterprise that
          stands for excellence and innovation in automotive turbocharger
          services.
        </p>
        <h2 className="text-md font-semibold mt-6 mb-2">Our Legacy</h2>
        <p className="text-xs text-justify">
        Founded on a legacy that dates back 40 years, SK Turbo Service Works is a testament to our founder, Mr. Shaik Fareed's unparalleled expertise and dedication. While the company in its current avatar is a few years young, the depth of experience it carries is vast, anchored firmly in Mr. Shaik Fareed's illustrious tenure in both government and private automotive sectors.
        </p>
        <p className="text-xs text-justify mt-4">
        Nestled in Hyderabad, SK Turbo Service Works emerges as more than just a service hub – it is the epitome of automotive brilliance. Our specialization in turbocharger services, combined with state-of-the-art facilities and a dedicated team, ensures each vehicle under our care performs at its zenith. With a commitment to quality and innovation, SK Turbo Service Works is driving the future of automotive turbocharger services.
        </p>
        <p className="font-semi-bold mt-4 text-mainYellow ">Embark on this automotive journey with us.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
