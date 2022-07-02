import OvalInfoBlock from 'components/OvalInfoBlock';

import { UilSun } from '@iconscout/react-unicons';

import {
  WeatherPanelWrapper,
  CurrentDayWrapper,
  CurrentDayBox,
  CurrentTemperature,
  DailyTemperature,
  DailyInfoWrapper,
  DailyInfoBox,
  DailyImg,
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

const WeatherPanel = () => {
  return (
    <WeatherPanelWrapper>

      <CurrentDayWrapper>
        <UilSun size={ 100 }/>
        <CurrentDayBox>
          <OvalInfoBlock info='Today' />
          <CurrentTemperature>12*</CurrentTemperature>
        </CurrentDayBox>
      </CurrentDayWrapper>
      <DailyInfoWrapper>
        {days.map(({id, day, temp}) => (
          <DailyInfoBox key={id}>
            <OvalInfoBlock info={day} />
            <DailyImg><UilSun size={50} /></DailyImg>
            <DailyTemperature>{ temp }</DailyTemperature>
          </DailyInfoBox>
        ))}
      </DailyInfoWrapper>
    </WeatherPanelWrapper>
  );
};

export default WeatherPanel;
