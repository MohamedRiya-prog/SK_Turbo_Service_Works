import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-between p-4 bg-mainBlue text-white text-lg'>
        <h1 className='font-lexend font-semibold'>SK. TURBO SERVICE WORKS</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <MenuIcon />
        </button>
      </div>

      {isOpen && (
        <div className="bg-white mt-2 shadow-xl rounded flex flex-col font-poppins text-sm p-2">
          <Link 
          to="/home"
          onClick={()=> setIsOpen(false)}
          className='pb-2'
          >
            Home
          </Link>
          <Link 
          to="/aboutus"
          onClick={()=> setIsOpen(false)}
          className='pb-2'
          >
            About Us
          </Link>
          <Link 
          to="/aboutus"
          onClick={()=> setIsOpen(false)}
          className='pb-2'
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
