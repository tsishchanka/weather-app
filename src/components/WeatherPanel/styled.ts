import styled from 'styled-components';

interface Props {
  maxWidth: string;
}

export const WeatherPanelWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray};
  font-size: 12px;
  min-height: 250px;
  display: flex;
  background: rgba(16,37,64, 0.5);
  align-items: center;
  justify-content: space-around;
  padding: 20px;
    @media (max-width: 800px) {
    flex-direction: column;
  };
  @media (max-width: 650px) {
    padding: 5px;
  }
`;

export const CurrentDayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;

`;

export const CurrentDayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CurrentTemperature = styled.div`
  font-size: 52px;
`;

export const DailyTemperature = styled.div`
  font-size: 22px;
`;

export const DailyInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 500px;
  @media (max-width: 650px) {
    min-width: 200px;
    flex-direction: column;
  }
`;

export const DailyInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 650px) {
    flex-direction: row;
    justify-content: space-around;
    min-width: 190px;
  }
`;

export const DailyImg = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img<Props>`
  max-width: ${props => props.maxWidth ? props.maxWidth : '65px'};
`;
