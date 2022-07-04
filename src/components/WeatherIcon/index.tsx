import { iconUrlFromCode } from '../../api';

import { Img } from './styled';


interface WeatherIconProps  {
  maxWidth: string;
  icon: any;
}

const WeatherIcon = ({ maxWidth, icon }: WeatherIconProps) => {
  return (
    <Img src={iconUrlFromCode(icon)} alt='' maxWidth={maxWidth} />
  );
};

export default WeatherIcon;
