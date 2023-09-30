import React from 'react';

const Youtube = () => {
  return (
    <div>
      <iframe 
         className=" p-4 top-0 left-0 w-full h-full"
         src="https://www.youtube.com/embed/p3hSsXYFW2E?si=-iseHTkDVNSIbaPV" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen
         title="YouTube video player"
      ></iframe>
    </div>
  );
}

export default Youtube;
