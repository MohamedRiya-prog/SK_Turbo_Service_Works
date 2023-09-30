import React, { useEffect } from 'react';

const Googlereviews = () => {
  
  useEffect(() => {
    // Check if the script is already loaded
    if (!window.elfsightPlatform || !document.getElementById('elfsight-script')) {
      const script = document.createElement('script');
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.defer = true;
      script.setAttribute('data-use-service-core', '');
      script.id = 'elfsight-script';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="elfsight-app-c06253f5-4e71-4b00-b0ce-22e6c32691ba"></div>
  );
}

export default Googlereviews;
