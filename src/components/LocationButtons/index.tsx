import React from 'react';

import { LocationsWrapper, LocationButton } from './styled';

const LocationButtons = () => {
  const locations = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Paris',
    },
    {
      id: 3,
      title: 'Minsk',
    },
    {
      id: 4,
      title: 'New-York',
    },
    {
      id: 5,
      title: 'Tokyo',
    },
  ];
  return (
    <LocationsWrapper>
      {locations.map(({ id, title }) => (
        <LocationButton key={id} type="button"> { title}</LocationButton>
      ))}
    </LocationsWrapper>
  );
};

export default LocationButtons;
