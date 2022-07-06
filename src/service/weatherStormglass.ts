import moment from 'moment';

import { getGeoCoords } from '../hooks/getGeoCoords';

const STORM_API_KEY = '7a7db70e-fc2a-11ec-a565-0242ac130002-7a7db7b8-fc2a-11ec-a565-0242ac130002';
const BASE_STORM_URL = 'https://api.stormglass.io/v1';

const getWeatherData = async (infoType: any, searchParams: any) => {
  const url: any = new URL(`${BASE_STORM_URL}/${infoType}`);
  const start  = moment().format();
  url.search = new URLSearchParams({ ...searchParams, start });
  const res = await fetch(url, {headers: {
    'Authorization': STORM_API_KEY,
  },
  });
  console.log('getWeatherData SEARCH', searchParams);
  return res.json();
};

const currentWeatherInfo = (data: any) => {
  const { hours,
    meta: {
      lat,
      lng,
    },
    time,
  } = data;
  console.log('storm DATA', data);

  return {
    hours,
    lat,
    lng,
    time,
  };
};

type Coords = {lat: number, [index: string]: number}
const getStormGlassData = async (searchParams: any) => {
  let coords: Coords = {...searchParams};
  if ('q' in searchParams) {
    coords = await getGeoCoords(searchParams.q);
    return coords;
  }
  const { lat, lon: lng } = coords;

  const currentWeather = await getWeatherData(
    'weather/point',
    {lat, lng},
  ).then(currentWeatherInfo);

  const forecastWeather = await getWeatherData('weather/point', {
    lat,
    lng,
    start: searchParams.start,
  });

  return { ...currentWeather, ...forecastWeather };
};


export default getStormGlassData;
