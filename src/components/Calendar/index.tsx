import { FC, useState, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import WeatherPanel from 'components/WeatherPanel';

import {GET_EVENTS_REQUEST} from 'actions';
import { apiCalendar } from 'services/googleCalendarApi';
import { formatToLocalTime, formatToLocalDay } from 'services/openWeather';

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
  EventButton,
} from './styled';

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
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);
  const { location, weatherInfo : secondTemp } = useSelector((state: any) => state.stormGlass);
  const { events } = useSelector((state: any) => state.eventsReducer);
  const {
    name,
    currentTemp,
    icon: currentIcon,
    country,
    timezone,
    daily,
    dt,
  } = weatherInfo;

  const { handleAuthClick } = apiCalendar;

  const handleAuth = async () => {
    setIsAuth(true);
    handleAuthClick();
  };

  const handleEvents = useCallback(() => {
    dispatch(GET_EVENTS_REQUEST());
  }, [dispatch]);

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
        <EventButton
          type='button'
          onClick={handleAuth}
        >SignIn
        </EventButton>
        <EventButton
          type='button'
          onClick={handleEvents}
        >Events
        </EventButton>
        {
          events.length !== 0 ? events.map(({ id, start, summary }: any) => {
            const { dateTime } = start;
            const time = moment(dateTime).format('LT');
            return (
              <GoogleCalendarInfoItem key={id}>
                <OvalInfoBlock info={time} />
                <InfoItemText>{summary}</InfoItemText>
              </GoogleCalendarInfoItem>
            );},
          ) : <OvalInfoBlock info= 'There is no items to display'/>
        }
      </GoogleCalendarInfo>
      { dt && <WeatherPanel isMainApi={isMainApi} daily={daily} currentTemp={currentTemp} currentIcon={currentIcon} />}
    </CalendarWrapper>
  );
};

export default Calendar;
