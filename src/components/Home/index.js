import React, { useEffect, useState } from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { Typography, Paper, Grid } from '@material-ui/core';

import { Toolbox } from '../user/ToolBox';
import { SettingsPanel } from '../user/SettingsPanel';

import { Container } from '../user/Container';
import { Button } from '../user/Button';
import Card from '../user/Card';
import { CardTop, CardBottom } from '../user/Card';
import Text from '../user/Text';
import Heading from '../user/Heading';

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
    <div>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
          Heading,
        }}
      >
        <div className=''>
          <div className='homeWrap' style={initStyle}>
            <div id='initContent'>
              <Frame>
                <Container>
                  {/* <Card /> */}
                  {/* <Button size='small' variant='outlined'>
                    Click
                  </Button> */}
                  <Text size='large' text='Hi world!' />
                  <Heading size='large' text='Hi world!' />
                  <Container padding={6} background='#999'>
                    <Text size='small' text="It's me again!" />
                  </Container>
                </Container>
              </Frame>
            </div>
          </div>
        </div>
        <div className={'elemContainer ' + menuClasses}>
          <div className='container'>
            <div className='row'>
              <h6>HEADERS</h6>
              <div className='container headersContainer'>
                <div className='row'>
                  <Toolbox />
                  <SettingsPanel />
                </div>
                <div className='row'>
                  <h1 style={{ marginBottom: 0 }}> Header Content </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Editor>
    </div>
  );
};

export default HomeComponent;
