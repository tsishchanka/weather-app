import { iconUrlFromCode } from 'service';

import { Img } from './styled';


interface WeatherIconProps  {
  maxWidth: string;
  icon: any;
}

const WeatherIcon = ({ maxWidth, icon }: WeatherIconProps) =>
  <Img src={iconUrlFromCode(icon)} alt='' maxWidth={maxWidth} />;


export default WeatherIcon;
