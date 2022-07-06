import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyATiRSrRrEaTu9MzcRy-6KjRVygjky6caM');

Geocode.setLanguage('en');
Geocode.enableDebug();


export const getGeoCoords = async (local: any) => {
  try
  {
    const res = await Geocode.fromAddress(local);

    const coords = res.results[0].geometry.location;
    return coords;

  } catch (err: any)
  {
    console.error(err);
  }
};





