import { Button } from '@mui/material';
import { useState, useRef } from 'react';
import { NavbarStyle } from './style';
const NavBar = () => {
  const [navbarButtonClass, setNavbarButtonClass] = useState('');
  const [navbarReverseButtonClass, setNavbarReverseButtonClass] = useState('');
  const dropRef = useRef(null);
  return (
    <NavbarStyle>
      <div className='navbars d-flex'>
        <Button
          onMouseEnter={() => {
            if (dropRef.current && !navbarButtonClass) {
              setNavbarButtonClass('hoverClass');
              setNavbarReverseButtonClass('');
            }
            if (
              dropRef.current &&
              !navbarReverseButtonClass &&
              navbarButtonClass
            ) {
              setNavbarReverseButtonClass('reverseHoverClass');
              setNavbarButtonClass('');
            }
          }}
          variant='outlined'
          className={` Navbutton ${navbarButtonClass && navbarButtonClass} ${
            navbarReverseButtonClass && navbarReverseButtonClass
          }`}
          ref={dropRef}
        >
          daridram
        </Button>
      </div>
    </NavbarStyle>
  );
};

export default NavBar;
