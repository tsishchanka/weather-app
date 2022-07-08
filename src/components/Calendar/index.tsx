/* eslint-disable no-plusplus */
import { FC, useEffect, useState, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import WeatherPanel from 'components/WeatherPanel';
import { formatToLocalTime, formatToLocalDay } from 'service';

import { KEYS } from '../../constants/localStorageKeys';

import {GET_EVENTS_REQUEST} from '../../redux/actions';
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
  console.log('LOC FROM UI', location);
  const { events } = useSelector((state: any) => state.eventsReducer);
  console.log(events);
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

  useEffect(() => {
    const savedEvents = localStorage.getItem(KEYS.EVENTS);
    if (savedEvents !== null){
      const parserEvents = JSON.parse(savedEvents);
    }
  },[]);

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
          onClick={handleAuth}
        >SignIn
        </button>


        <button
          type='button'
          onClick={handleEvents}
        >Events
        </button>
         {
          events.length !== 0 && events.map(({ id, start, summary }: any) => {
            const { dateTime } = start;
            const time = moment(dateTime).format('LT');
            return (
              <GoogleCalendarInfoItem key={id}>
                <OvalInfoBlock info={time} />
                <InfoItemText>{summary}</InfoItemText>
              </GoogleCalendarInfoItem>
            );},
          )
        }

      </GoogleCalendarInfo>
      { dt && <WeatherPanel isMainApi={isMainApi} daily={daily} currentTemp={currentTemp} currentIcon={currentIcon} />}

    </CalendarWrapper>
  );
};

export default Calendar;
