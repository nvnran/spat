import React, { useEffect, useState } from 'react';

const HomeComponent = ({ menuShow }) => {
  const [initStyle, setInitStyle] = useState({
    padding: '30px 40px',
    height: '100%',
  });
  const [menuClasses, setMenuClasses] = useState('');
  const [showElemContainer, setShowElemContainer] = useState(false);

  useEffect(() => {
    if (menuShow) {
      setMenuClasses('animate__animated animate__slideInRight');
    } else {
      setMenuClasses('');
    }
  }, [menuShow]);

  return (
    <>
      <div className='home'>
        <div className='homeWrap' style={initStyle}>
          <div id='initContent'>
            <p>Click on "+" in the top right corner to add elements</p>
          </div>
        </div>
      </div>
      <div className={'elemContainer ' + menuClasses}>
        <div className='container'>
          <div className='row'>
            <h6>HEADERS</h6>
            <div className='container headersContainer'>
              <div className='row'>
                <p>Title</p>
                <h1>Header Content </h1>
              </div>
              <div className='row'>
                <h1 style={{ marginBottom: 0 }}> Header Content </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
