import React from "react";

const Youtube = () => {
  return (
    <div>
      <iframe
        className=" p-4 top-0 left-0 w-full h-full"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?si=PSatONwY1Gk6wbwq&amp;list=PLWswM8oo4CQh7JKtjD5oVQqUzquBEO14Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Youtube;
