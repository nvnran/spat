import React, { useEffect, useState } from 'react';
import Home from '../components/Home';
import Header from '../components/Header';

const HomePage = () => {
  const [menuShow, setMenuShow] = useState(false);
  const handleMenuShow = () => {
    setMenuShow(!menuShow);
  };

  return (
    <>
      <Header handleMenuShow={handleMenuShow} menuShow={menuShow} />
      <Home menuShow={menuShow} />
    </>
  );
};

export default HomePage;
