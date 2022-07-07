
import { LOCAL_STORAGE_KEYS } from 'constants/localStorageKeys';

import moment from 'moment';

import { useState, FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_STORM_REQUEST, GET_OPEN_WEATHER_REQUEST } from 'redux/actions';
import { UilSearchAlt, UilMapMarker } from '@iconscout/react-unicons';


import { InputContainer, InputWrapper, SearchInput, WeatherSettings, WeatherButton } from './styled';

interface ControlPanelProps {
  setIsMainApi: any;
  isMainApi: boolean;
  setQuery: any;
  onChangeGeolocation: any;
  query: any;
}

const ControlPanel: FC<ControlPanelProps> = ({
  setIsMainApi,
  isMainApi,
  setQuery,
  onChangeGeolocation,
  query,
}: ControlPanelProps) => {

  const dispatch = useDispatch();
  const units = 'metric';
  const start  = moment().format();
  const {
    weatherInfo,
  } = useSelector((state: any) => state.weather);

  const { lat: latCurr, lon: lonCurr, dt } = weatherInfo;

  const [location, setLocation] = useState('');

  const handleSearchLocation = () => {
    if (location !== '') {
      setQuery({ q: location });
      setLocation('');
    }
  };

  const handleFetchStormGlass = () => {
    dispatch(GET_STORM_REQUEST({ ...query, start }));
    setIsMainApi(false);
    localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_LOCATION, JSON.stringify({ lat: latCurr, lon: lonCurr }));
  };

  const handleFetchOpenWeather = useCallback(() => {
    dispatch(GET_OPEN_WEATHER_REQUEST({ ...query, units }));
    setIsMainApi(true);
    localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_LOCATION, JSON.stringify({ lat: latCurr, lon: lonCurr }));
  }, [dispatch, query, units]);

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
        <WeatherButton type="button" onClick={ handleFetchOpenWeather }>WO</WeatherButton>
        <WeatherButton type="button" onClick={ handleFetchStormGlass }>ST</WeatherButton>
      </WeatherSettings>
    </InputContainer>
  );
};

export default ControlPanel;
