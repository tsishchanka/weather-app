/* eslint-disable no-plusplus */
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyATiRSrRrEaTu9MzcRy-6KjRVygjky6caM');

Geocode.setLanguage('en');
Geocode.enableDebug();


export const getGeoCoords = async (local: any) => {
  try {
    const res = await Geocode.fromAddress(local);

    const coords = res.results[0].geometry.location;
    return coords;

  } catch (err: any) {
    return err;
  }
};


export const getGeoAddress = async (lat: any, lng: any) => {
  try {
    const res = await Geocode.fromLatLng(lat, lng);

    const address = res.results[0].formatted_address;
    return address;

  } catch (err: any) {
    return err;
  }
};


