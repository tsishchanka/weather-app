import { useLayoutEffect, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import Weather from '../screens';
import {KEYS} from '../constants/localStorageKeys';
import { GET_OPEN_WEATHER_REQUEST, GET_STORM_REQUEST } from '../redux/actions';

const WeatherContainer = () => {

  const dispatch = useDispatch();
  const {
    weatherInfo,
    isLoading,
    isOpenWeather,
    error,
  } = useSelector((state: any) => state.weather);

  const [isMainApi, setIsMainApi] = useState(true);
  const [query, setQuery] = useState({});
  const units = 'metric';
  const start  = moment().format();

  useEffect(() => {
    const currentLocation = localStorage.getItem(KEYS.CURRENT_LOCATION);
    if (currentLocation !== null){
      const current = JSON.parse(currentLocation);
      dispatch(GET_OPEN_WEATHER_REQUEST({...current, units }));
    } else
    {
      dispatch(GET_OPEN_WEATHER_REQUEST({ q: 'Minsk', units }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEYS.CURRENT_LOCATION, JSON.stringify({ ...query }));
    if (isMainApi){
      dispatch(GET_OPEN_WEATHER_REQUEST({ ...query, units }));
    } else
    {
      dispatch(GET_STORM_REQUEST({ ...query, start }));
    }

  }, [query, units]);


  const handleChangeGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
        localStorage.setItem(KEYS.CURRENT_LOCATION, JSON.stringify({lat, lon}));
      });
    }
  };

  return (
    <Weather
      isMainApi={isMainApi}
      setIsMainApi={setIsMainApi}
      weatherInfo={weatherInfo}
      isLoading={isLoading}
      error={error}
      query={query}
      setQuery={setQuery}
      onChangeGeolocation = {handleChangeGeolocation}
    />
  );
};

export default WeatherContainer;
