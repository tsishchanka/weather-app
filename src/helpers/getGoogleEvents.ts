/* eslint-disable no-plusplus */
import { gapi } from 'gapi-script';

import {CLIENT_ID, API_KEY, DISCOVERY_DOCS, SCOPES} from '../constants/google';



export const getGoogleInfo = () => {
  // gapi.load('client:auth2', () => {
  //   console.log('loaded client');

  //   gapi.client.init({
  //     apiKey: API_KEY,
  //     clientId: CLIENT_ID,
  //     discoveryDocs: DISCOVERY_DOCS,
  //     scope: SCOPES,
  //   });

  //   gapi.client.load('calendar', 'v3', () => console.log('bam!'));


  //   gapi.auth2.getAuthInstance().signIn()
  //     .then(() => {

  //       // let event = [{
  //       //   'summary': 'Awesome Event!',
  //       //   'location': '800 Howard St., San Francisco, CA 94103',
  //       //   'description': 'Really great refreshments',
  //       //   'start': {
  //       //     'dateTime': '2020-06-28T09:00:00-07:00',
  //       //     'timeZone': 'America/Los_Angeles',
  //       //   },
  //       //   'end': {
  //       //     'dateTime': '2020-06-28T17:00:00-07:00',
  //       //     'timeZone': 'America/Los_Angeles',
  //       //   },
  //       //   'recurrence': [
  //       //     'RRULE:FREQ=DAILY;COUNT=2',
  //       //   ],
  //       //   'attendees': [
  //       //     {'email': 'lpage@example.com'},
  //       //     {'email': 'sbrin@example.com'},
  //       //   ],
  //       //   'reminders': {
  //       //     'useDefault': false,
  //       //     'overrides': [
  //       //       {'method': 'email', 'minutes': 24 * 60},
  //       //       {'method': 'popup', 'minutes': 10},
  //       //     ],
  //       //   },
  //       // }];

  //       // let request = gapi.client.calendar.events.insert({
  //       //   'calendarId': 'primary',
  //       //   'resource': event,
  //       // });

  //       // request.execute(event => {
  //       //   console.log(event);
  //       //   window.open(event.htmlLink);
  //       // });




  //       // get events
  //       gapi.client.calendar.events.list({
  //         'calendarId': 'primary',
  //         'timeMin': (new Date()).toISOString(),
  //         'showDeleted': false,
  //         'singleEvents': true,
  //         'maxResults': 3,
  //         'orderBy': 'startTime',
  //       }).then((response: any) => {
  //         const events = response.result.items;
  //         console.log('EVENTS: ', response);
  //       });



  //     });

  // });

  let tokenClient;
  let gapiInited = false;
  let gisInited = false;
  async function intializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES,
    });
    gapiInited = true;

  }

  function gapiLoaded() {
    gapi.load('client', intializeGapiClient);
  }



  // function gisLoaded() {
  //   tokenClient = google.accounts.oauth2.initTokenClient({
  //     client_id: CLIENT_ID,
  //     scope: SCOPES,
  //     callback: '', // defined later
  //   });
  //   gisInited = true;

  // }

  async function listUpcomingEvents() {
    let response;
    try {
      const request = {
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime',
      };
      response = await gapi.client.calendar.events.list(request);
    } catch (err) {
      console.log(err);
    }

    const events = response.result.items;

  }

  gapiLoaded();
  listUpcomingEvents();

};
