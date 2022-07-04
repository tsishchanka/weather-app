import  {FC} from 'react';
import OvalInfoBlock from 'components/OvalInfoBlock';

import { type DailyInfo } from '../Calendar';

import WeatherIcon from '../WeatherIcon';

import {
  WeatherPanelWrapper,
  CurrentDayWrapper,
  CurrentDayBox,
  CurrentTemperature,
  DailyTemperature,
  DailyInfoWrapper,
  DailyInfoBox,
  DailyImg,
  Img,
} from './styled';


const days = [
  { id: 1, day: 'Mon', temp: '20*' },
  { id: 2, day: 'Tue', temp: '20*' },
  { id: 3, day: 'Wed', temp: '20*' },
  { id: 4, day: 'Thu', temp: '20*' },
  { id: 5, day: 'Fri', temp: '20*' },
  { id: 6, day: 'Sat', temp: '20*' },
  { id: 7, day: 'Sun', temp: '20*' },
];

interface DailyProps {
  daily: Array<DailyInfo>;
  currentTemp: number;
  currentIcon: string;
}


const WeatherPanel = ({daily, currentTemp, currentIcon}:DailyProps) => {
  return (
    <WeatherPanelWrapper>

      <CurrentDayWrapper>
        <WeatherIcon  maxWidth='100px' icon = {currentIcon}/>
        <CurrentDayBox>
          <OvalInfoBlock info='Today' />
          <CurrentTemperature>{ `${currentTemp }°` }</CurrentTemperature>
        </CurrentDayBox>
      </CurrentDayWrapper>
      <DailyInfoWrapper>
        {daily?.map(({id, title, temp, icon}) => (
          <DailyInfoBox key={id}>
            <OvalInfoBlock info={title} />
            <DailyImg><WeatherIcon maxWidth='65px' icon = {icon}/></DailyImg>
            <DailyTemperature>{ `${temp}°` }</DailyTemperature>
          </DailyInfoBox>
        ))}
      </DailyInfoWrapper>

    </WeatherPanelWrapper>
  );
};

export default WeatherPanel;
