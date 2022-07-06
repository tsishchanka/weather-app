import { useLayoutEffect, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Weather from '../screens';
import {LOCAL_STORAGE_KEYS} from '../constants/localStorageKeys';
import { GET_OPEN_WEATHER_REQUEST, GET_STORM_REQUEST } from '../redux/actions';

const WeatherContainer = () => {

  const dispatch = useDispatch();
  const {
    weatherInfo,
    isLoading,
    isOpenWeather,
    error,
  } = useSelector((state: any) => state.weather);

  const { lat: latCurr, lon: lonCurr } = weatherInfo;

  const [isMainApi, setIsMainApi] = useState(true);
  const [query, setQuery] = useState({});
  const units = 'metric';

  const getGeoPosition = () => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        pos => {
          const newUserPos = {
            lat: pos.coords.latitude,
            long: pos.coords.longitude,
          };

          setQuery(newUserPos);
          localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_LOCATION, JSON.stringify({lat: pos.coords.latitude,
            long: pos.coords.longitude}));
        });
    } else {
      setQuery({
        q: 'minsk',
      });
    }
  };

  useLayoutEffect(() => {
    const currentTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.CURRENT_LOCATION);
    if (currentTheme !== null){
      const current = JSON.parse(currentTheme);
      setQuery(current);
    } else {
      getGeoPosition();
    }
  }, []);

  useEffect(() => {
    if (isMainApi){
      dispatch(GET_OPEN_WEATHER_REQUEST({ ...query, units }));
    } else {
      dispatch(GET_STORM_REQUEST({ ...query }));
    }
    localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_LOCATION, JSON.stringify({ ...query }));
  }, [query, units]);


  const handleChangeGeolocation = () => {
    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
        localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_LOCATION, JSON.stringify({lat, lon}));
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
