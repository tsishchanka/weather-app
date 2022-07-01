import React from 'react';

import LocationButtons from '../components/LocationButtons';
import ControlPanel from '../components/ControlPanel';

import Calendar from '../components/Calendar';

import { Container } from './styled';


const Weather = () => {
  return (
    <Container>
      <LocationButtons />
      <ControlPanel />
      <Calendar/>
    </Container>
  );
};

export default Weather;
