import { FC } from 'react';

import WeatherPanel from 'components/WeatherPanel';

import OvalInfoBlock from '../OvalInfoBlock';

import { formatToLocalTime, formatToLocalDay } from '../../api';

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

}

const Calendar: FC<CalendarProps> = ({ weatherInfo }: CalendarProps) => {
  const {
    name,
    currentTemp,
    icon: currentIcon,
    country,
    timezone,
    daily,
    dt,
  } = weatherInfo;

  return (
    <CalendarWrapper>
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
        {
          tasks.map(({ id, time, text }) => (
            <GoogleCalendarInfoItem key={id}>
              <OvalInfoBlock info={time } />
              <InfoItemText>{text}</InfoItemText>
            </GoogleCalendarInfoItem>
          ))
        }
      </GoogleCalendarInfo>
      <WeatherPanel daily={daily} currentTemp={currentTemp} currentIcon={currentIcon} />
    </CalendarWrapper>
  );
};

export default Calendar;
