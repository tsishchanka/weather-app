import { gapi } from 'gapi-script';

import {CLIENT_ID, API_KEY, DISCOVERY_DOCS, SCOPES} from '../constants/google';

const getGoogleCalendar = () => {



  const SCOPE = 'https://www.googleapis.com/auth/calendar.events';
  const initClient = () => {
    const discoveryUrl = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
    gapi.client.init({
      'apiKey': API_KEY,
      'clientId': CLIENT_ID,
      'discoveryDocs': [discoveryUrl],
      'scope': SCOPE,
    });
    console.log('Google loaded');
  };
  const handleClientLoad = () => gapi.load('client:auth2', initClient);

  const script = document.createElement('script');

  script.src = 'https://apis.google.com/js/api.js';
  script.async = true;
  script.defer = true;
  script.onload = handleClientLoad;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };

};

export default getGoogleCalendar;
