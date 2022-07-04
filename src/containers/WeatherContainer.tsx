import { useLayoutEffect, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Weather from '../screens/index';
import { GET_OPEN_WEATHER_REQUEST } from '../redux/actions';

const WeatherContainer = () => {

  const dispatch = useDispatch();
  const {
    weatherInfo,
    isLoading,
    isOpenWeather,
    error,
  } = useSelector((state: any) => state.weather);

  const [query, setQuery] = useState({});
  const units = 'metric';

  const getGeoPosition = () => {
    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const newUserPos = {
            lat: pos.coords.latitude,
            long: pos.coords.longitude,
          };

          setQuery(newUserPos);
        });
    } else
    {
      setQuery({
        q: 'minsk',
      });
    }
  };

  useLayoutEffect(() => {
    // getGeoPosition();
    setQuery({
        q: 'seul',
      });
  }
  , []);

  useEffect(() => {
    dispatch(GET_OPEN_WEATHER_REQUEST({ ...query, units }));
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
      });
    }
  };

  return (
    <Weather
      weatherInfo={weatherInfo}
      isLoading={isLoading}
      isOpenWeather={isOpenWeather}
      error={error}
      query={query}
      setQuery={setQuery}
      onChangeGeolocation = {handleChangeGeolocation}
    />
  );
};

export default WeatherContainer;
