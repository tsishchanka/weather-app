import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const useGoogle = () => {

  useEffect(() => {

    const SCOPE = 'https://www.googleapis.com/auth/calendar.events';
    const initClient = () => {
      const discoveryUrl = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
      gapi.client.init({
        'clientId': 'TODO: your client id here',
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

  }, []);
};

export default useGoogle;
