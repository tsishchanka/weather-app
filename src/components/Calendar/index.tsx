import { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import WeatherPanel from 'components/WeatherPanel';
import { formatToLocalTime, formatToLocalDay } from 'service';

import {CALENDAR_ID } from '../../constants/googleCreds';
import { apiCalendar } from '../../service/googleCalendarApi';
import OvalInfoBlock from '../OvalInfoBlock';

import {
  CalendarWrapper,
  CalendarInfoWrapper,
  LeftSideInfo,
  RightSideInfo,
  MainTime,
  Time,
  PmAm,
  Day,
  GoogleCalendarInfo,
  GoogleCalendarInfoItem,
  InfoItemText,
  CurrentCity,
  CurrentCountry,
} from './styled';

const tasks = [
  { id: 1, time: '12:00', text: 'first' },
  { id: 2, time: '12:00', text: 'second' },
  { id: 3, time: '12:00', text: 'third' },

];

export type DailyInfo = {
  id: string,
  title: string,
  temp: number,
  icon?: string
};

type Weather = {
  name: string;
  currentTemp: number;
  icon: string;
  country: string;
  timezone: string;
  daily: Array<DailyInfo>;
  dt: any;
}

interface CalendarProps {
  weatherInfo: Weather;
  isMainApi: boolean;
}

const Calendar: FC<CalendarProps> = ({ weatherInfo, isMainApi }: CalendarProps) => {
  const [events, setEvents] = useState([]);

  const {
    name,
    currentTemp,
    icon: currentIcon,
    country,
    timezone,
    daily,
    dt,
  } = weatherInfo;
  const { location } = useSelector((state: any) => state.stormGlass);

  const { handleAuthClick, listUpcomingEvents } = apiCalendar;

  const googleEvents = async () => {
    try {
      const res = await listUpcomingEvents(3, CALENDAR_ID);
      console.log('res', res.items);
    } catch (err){
      console.log(err);}

  };

  console.log('googleEvents',googleEvents());

  return (
    <CalendarWrapper bgColor={currentTemp > 20 ? 'orange': 'blue'}>
      <CalendarInfoWrapper>
        <LeftSideInfo>
          <MainTime>
            <Time>
              { dt && formatToLocalTime(dt, timezone, 'hh:mm')}
            </Time>
            <PmAm>
              { dt && formatToLocalTime(dt, timezone, 'a')}
            </PmAm>
          </MainTime>
          <Day>{dt &&  formatToLocalDay(dt, timezone, 'cccc, dd LLL yyyy') }</Day>
        </LeftSideInfo>
        <RightSideInfo>
          <CurrentCity>
            {isMainApi ? name : location}
          </CurrentCity>
          <CurrentCountry>
            {isMainApi && country}
          </CurrentCountry>
        </RightSideInfo>
      </CalendarInfoWrapper>
      <GoogleCalendarInfo>
        <button
          type='button'
          onClick={handleAuthClick}
        >Events
        </button>
        {
          // events.map(({ id, time, summary }) => (
          //   <GoogleCalendarInfoItem key={id}>
          //     {/* <OvalInfoBlock info={time } /> */}
          //     <InfoItemText>{summary}</InfoItemText>
          //   </GoogleCalendarInfoItem>
          // ))
        }
      </GoogleCalendarInfo>
      <WeatherPanel isMainApi={isMainApi} daily={daily} currentTemp={currentTemp} currentIcon={currentIcon} />
    </CalendarWrapper>
  );
};

export default Calendar;
