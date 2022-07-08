import { getGeoCoords, getGeoAddress } from '../helpers/getGeoCoords';

const STORM_API_KEY = '137af202-fdc3-11ec-b21f-0242ac130002-137af270-fdc3-11ec-b21f-0242ac130002';
const BASE_STORM_URL = 'https://api.stormglass.io/v1';


const getWeatherData = async (infoType: any, searchParams: any) => {
  const url: any = new URL(`${BASE_STORM_URL}/${infoType}`);

  url.search = new URLSearchParams({ ...searchParams });
  const res = await fetch(url, {headers: {
    'Authorization': STORM_API_KEY,
  },
  });

  return res.json();
};

const currentWeatherInfo = (data: any) => {
  const { hours,
    meta: {
      lat,
      lng,
    },
  } = data;
  return {
    hours,
    lat,
    lng,
  };
};

type Coords = { lat: number, [index: string]: number; }

const getStormGlassData = async (searchParams: any) => {
  let coords: Coords = {...searchParams};
  if ('q' in coords) {
    coords = await getGeoCoords(coords.q);
  }
  const { lat, lng } = coords;

  let strLat = lat.toString();
  let strLng =lng.toString();

  const location = await getGeoAddress(strLat, strLng);
  const currentWeather = await getWeatherData(
    'weather/point',
    {...coords},
  ).then(currentWeatherInfo);

  const forecastWeather = await getWeatherData('weather/point', {
    lat,
    lng,
    start: searchParams.start,
  });


  return { ...currentWeather, ...forecastWeather, location };
};


export default getStormGlassData;
