import {KEYS} from '../../constants/localStorageKeys';

import {locations} from './mock';
import { LocationsWrapper, LocationButton } from './styled';

interface LocationProps {
  setQuery: any;
}

const LocationButtons = ({setQuery}: LocationProps) => {

  return (
    <LocationsWrapper>
      {locations.map(({ id, title }) => (
        <LocationButton
          key={id}
          type="button"
          onClick={
            () => setQuery({ q: title })
          }> {title}
        </LocationButton>
      ))}
    </LocationsWrapper>
  );
};

export default LocationButtons;
