import React from 'react';

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
  InfoItemTime,
  InfoItemText,
  CurrentCity,
  CurrentCountry,
} from './styled';

const tasks = [
  { id: 1, time: '12:00', text: 'first' },
  { id: 2, time: '12:00', text: 'second' },
  { id: 3, time: '12:00', text: 'third' },

];

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarInfoWrapper>
        <LeftSideInfo>
          <MainTime>
            <Time>
              10:00
            </Time>
            <PmAm>
              PM
            </PmAm>
          </MainTime>
          <Day>Monday, 2 July, 2022</Day>

        </LeftSideInfo>
        <RightSideInfo>
          <CurrentCity>
            Minsk
          </CurrentCity>
          <CurrentCountry>
            Belarus
          </CurrentCountry>
        </RightSideInfo>
      </CalendarInfoWrapper>


      <GoogleCalendarInfo>
        {
          tasks.map(({ id, time, text }) => (
            <GoogleCalendarInfoItem key={id}>
              <InfoItemTime>{time}</InfoItemTime>
              <InfoItemText>{text}</InfoItemText>
            </GoogleCalendarInfoItem>
          ))
        }
      </GoogleCalendarInfo>
    </CalendarWrapper>
  );
};

export default Calendar;
