import { useSelector } from 'react-redux';

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
} from './styled';


interface DailyProps {
  daily: Array<DailyInfo>;
  currentTemp: number;
  currentIcon: string;
  isMainApi: boolean;
}


const WeatherPanel = ({daily, currentTemp, currentIcon, isMainApi}: DailyProps) => {

  const {
    weatherInfo: tempFromStormGlass,
  } = useSelector((state: any) => state.stormGlass);

  return (
    <WeatherPanelWrapper>
      <CurrentDayWrapper>
        <WeatherIcon  maxWidth='100px' icon = {currentIcon}/>
        <CurrentDayBox>
          <OvalInfoBlock info='Today' />
          <CurrentTemperature>{isMainApi ? `${currentTemp }°` : `${tempFromStormGlass }°` }</CurrentTemperature>
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
