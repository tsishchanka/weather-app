import { DateTime } from 'luxon';

import { uuid } from '../helpers/uuid';

const API_KEY = 'b97193ccd829d8b46f2dc8c92b121ca0';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = (infoType: any, searchParams: any) => {

  const url: any = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then(res => res.json());
};



const formatCurrentWeather = (data: any) => {
  const {
    coord: { lat, lon },
    main: { temp },
    name,
    dt,
    sys: { country },
    weather,
  } = data;

  const { main: details, icon } = weather[0];

  const currentTemp = temp.toFixed();

  return {
    lat,
    lon,
    currentTemp,
    name,
    dt,
    country,
    details,
    icon,
  };
};

const formatToLocalTime = (
  secs: number,
  zone: any,
  format = 'hh:mm a',
) => DateTime?.fromSeconds(secs).setZone(zone).toFormat(format);

const formatToLocalDay = (
  secs: any,
  zone: any,
  format = 'cccc, dd LLL yyyy',
) => DateTime?.fromSeconds(secs).setZone(zone).toFormat(format);

const formatForecastWeather = (data: any) => {
  let { timezone, daily } = data;
  console.log('formatForecastWeather', data)
  daily = daily.slice(1, 8).map((d: any) => {
    return {
      id: uuid(),
      title: formatToLocalDay(d.dt, timezone, 'ccc'),
      temp: d.temp.day?.toFixed(),
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily };
};









const getFormattedWeatherData = async (searchParams: any) => {
  const formattedCurrentWeather = await getWeatherData(
    'weather',
    searchParams,
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData('onecall', {
    lat,
    lon,
    exclude: 'current,minutely,alerts',
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};


const iconUrlFromCode = (code: any) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, formatToLocalDay, iconUrlFromCode };
