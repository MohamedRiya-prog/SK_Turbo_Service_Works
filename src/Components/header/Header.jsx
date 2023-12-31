import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { Logo } from '../Assets';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center p-4 bg-mainBlue text-white text-lg'>
        <img src={Logo} alt="" />
        <h1 className='font-lexend font-semibold'>SK. TURBO SERVICE WORKS</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <MenuIcon />
        </button>
      </div>

      {isOpen && (
        <div className="bg-white mt-2 shadow-xl rounded flex flex-col font-poppins text-sm p-2">
          <Link 
          to="/"
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
          to="/contact"
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
