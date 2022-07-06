import { FC, useCallback } from 'react';

import WeatherPanel from 'components/WeatherPanel';
import { getGoogleInfo } from 'helpers/getGoogleEvents';
import { formatToLocalTime, formatToLocalDay } from 'service';

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
  const {
    name,
    currentTemp,
    icon: currentIcon,
    country,
    timezone,
    daily,
    dt,
  } = weatherInfo;

  const handleGetEvents = useCallback(() => {
    getGoogleInfo();
  }, []);

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
            {name}
          </CurrentCity>
          <CurrentCountry>
            {country}
          </CurrentCountry>
        </RightSideInfo>
      </CalendarInfoWrapper>
      <GoogleCalendarInfo>
        <button type="button" onClick = {handleGetEvents}>Events</button>
        {
          tasks.map(({ id, time, text }) => (
            <GoogleCalendarInfoItem key={id}>
              <OvalInfoBlock info={time } />
              <InfoItemText>{text}</InfoItemText>
            </GoogleCalendarInfoItem>
          ))
        }
      </GoogleCalendarInfo>
      <WeatherPanel isMainApi={isMainApi} daily={daily} currentTemp={currentTemp} currentIcon={currentIcon} />
    </CalendarWrapper>
  );
};

export default Calendar;
