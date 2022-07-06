import styled from 'styled-components';

export const LocationsWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const LocationButton = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  margin: 5px;
  color: ${({ theme }) => theme.color.white};
`;
