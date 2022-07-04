import { useState, FC } from 'react';
import { UilSearchAlt, UilMapMarker } from '@iconscout/react-unicons';

import { InputContainer, InputWrapper, SearchInput, WeatherSettings, WeatherButton } from './styled';

interface ControlPanelProps {
  isOpenWeather: boolean;
  setQuery: any;
  onChangeGeolocation: any;
}

const ControlPanel: FC<ControlPanelProps> = ({
  isOpenWeather,
  setQuery,
  onChangeGeolocation,
}: ControlPanelProps) => {
  const [location, setLocation] = useState('');
  const handleSearchLocation = () => {
    if (location !== '') setQuery({ q: location });
  };


  return (
    <InputContainer>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="search..."
          value={location}
          onChange={(e: any) => {setLocation(e.currentTarget.value);}}
        />
        <UilSearchAlt size={25} className="icon" onClick={handleSearchLocation} />
        <UilMapMarker size={25} className="icon" onClick={onChangeGeolocation} />
      </InputWrapper>
      <WeatherSettings>
        <WeatherButton type="button">1</WeatherButton>
        <WeatherButton type="button">2</WeatherButton>
      </WeatherSettings>
    </InputContainer>
  );
};

export default ControlPanel;
