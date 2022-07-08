import ApiCalendar from 'react-google-calendar-api';

import {GOOGLE_API_KEY, GOOGLE_CLIENT_ID} from '../constants/googleCreds';

const config = {
  'clientId': GOOGLE_CLIENT_ID,
  'apiKey': GOOGLE_API_KEY,
  'scope': 'https://www.googleapis.com/auth/calendar',
  'discoveryDocs': [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};

export const apiCalendar = new ApiCalendar(config);
