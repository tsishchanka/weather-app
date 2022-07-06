import LocationButtons from '../components/LocationButtons';
import ControlPanel from '../components/ControlPanel';

import Calendar from '../components/Calendar';

import { Container } from './styled';

interface WeatherProps {
  weatherInfo: any;
  isLoading: boolean;
  isMainApi: boolean;
  setIsMainApi: any;
  error: any;
  query: any;
  setQuery: any;
  onChangeGeolocation: any;
}

const Weather = ({
  weatherInfo,
  isLoading,
  isMainApi,
  setIsMainApi,
  error,
  query,
  setQuery,
  onChangeGeolocation,
}: WeatherProps) => {

  return (
    <Container>
      <LocationButtons setQuery={setQuery} />
      <ControlPanel
        isMainApi={isMainApi}
        setIsMainApi={setIsMainApi}
        setQuery={setQuery}
        onChangeGeolocation={onChangeGeolocation}
        query={query}
      />
      {!isLoading &&  <Calendar isMainApi={isMainApi} weatherInfo={ weatherInfo }/>}

    </Container>
  );
};

export default Weather;
