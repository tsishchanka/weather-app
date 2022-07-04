import LocationButtons from '../components/LocationButtons';
import ControlPanel from '../components/ControlPanel';

import Calendar from '../components/Calendar';

import { Container } from './styled';

interface WeatherProps {
  weatherInfo: any;
  isLoading: boolean;
  isOpenWeather: boolean;
  error: any;
  query: any;
  setQuery: any;
  onChangeGeolocation: any;
}

const Weather = ({
  weatherInfo,
  isLoading,
  isOpenWeather,
  error,
  query,
  setQuery,
  onChangeGeolocation,
}: WeatherProps) => {

  return (
    <Container>
      <LocationButtons setQuery={setQuery} />
      <ControlPanel
        isOpenWeather={isOpenWeather}
        setQuery={setQuery}
        onChangeGeolocation={onChangeGeolocation}
      />
      {!isLoading &&  <Calendar weatherInfo={ weatherInfo }/>}

    </Container>
  );
};

export default Weather;
