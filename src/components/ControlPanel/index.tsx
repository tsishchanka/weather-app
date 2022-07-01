import React from 'react';
import { UilSearchAlt, UilMapMarker } from '@iconscout/react-unicons';

import { InputContainer, InputWrapper, SearchInput, WeatherSettings, WeatherButton } from './styled';

const ControlPanel = () => {
  return (
    <InputContainer>
      <InputWrapper>
        <SearchInput type="text" placeholder="search..."/>
        <UilSearchAlt size={25} className="icon"/>
        <UilMapMarker size={25} className="icon"/>
      </InputWrapper>
      <WeatherSettings>
        <WeatherButton type="button">1</WeatherButton>
        <WeatherButton type="button">2</WeatherButton>
      </WeatherSettings>
    </InputContainer>
  );
};

export default ControlPanel;
