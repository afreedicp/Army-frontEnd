import { Button } from '@mui/material';
import { useState } from 'react';
import { NavbarStyle } from './style';
const NavBar = () => {
  const [navbarButtonClass, setNavbarButtonClass] = useState('');
  const [navbarReverseButtonClass, setNavbarReverseButtonClass] = useState('');

  return (
    <NavbarStyle>
      <div className='navbars d-flex'>
        <Button
          onMouseEnter={() => {
            if (!navbarButtonClass) {
              setNavbarButtonClass('hoverClass');
              setNavbarReverseButtonClass('');
            }
            if (!navbarReverseButtonClass && navbarButtonClass) {
              setNavbarReverseButtonClass('reverseHoverClass');
              setNavbarButtonClass('');
            }
          }}
          variant='outlined'
          className={` Navbutton ${navbarButtonClass && navbarButtonClass} ${
            navbarReverseButtonClass && navbarReverseButtonClass
          }`}
        >
          daridram
        </Button>
      </div>
    </NavbarStyle>
  );
};

export default NavBar;
