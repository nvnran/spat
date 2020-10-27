import React, { useEffect, useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { VscArrowRight } from 'react-icons/vsc';

const HeaderComponent = ({ handleMenuShow, menuShow }) => {
  const [menuIcon, setMenuIcon] = useState('');
  const handleOnClick = () => {
    return handleMenuShow(!menuShow);
  };
  useEffect(() => {
    if (menuShow) {
      setMenuIcon(<VscArrowRight className='addIcon' size={24} />);
    } else {
      setMenuIcon(<HiOutlinePlus className='addIcon' size={24} />);
    }
  }, [menuShow]);
  return (
    <>
      <div className='header'>
        <div className='logoWrap'>
          <div className='logo'></div>
          <div className='logoText'>AirTel</div>
        </div>
        <div className='centerWrap'></div>
        <div className='addWrap' onClick={handleOnClick}>
          {menuIcon}
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
