import styled from 'styled-components';

interface Props {
  bgColor: string;
}

export const CalendarWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 900px;
  margin: 10px auto 0;
  background-color: ${props => props.bgColor};
  padding: 15px 50px;
    @media (max-width: 650px) {
    padding: 10px 50px;
    margin: 5px auto 0;
  }
`;

export const CalendarInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftSideInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const RightSideInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  max-width: 300px;
  @media (max-width: 400px) {
    align-items: center;
  }
`;

export const MainTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Time = styled.div`
  align-items: center;
  font-size: 54px;
`;

export const PmAm = styled.div`
  font-size: 24px;
  margin: 25px 5px 5px;

`;

export const Day = styled.div`
 font-size: 14px;
 @media (max-width: 400px) {
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

export const GoogleCalendarInfo = styled.div`
  margin: 15px 0 0;
  @media (max-width: 400px) {
   margin: 5px 0;
  }
`;

export const GoogleCalendarInfoItem = styled.div`
   display: flex;
   margin: 10px 0;
   @media (max-width: 400px) {
   margin: 5px 0;
  }
`;

export const InfoItemText = styled.div`
  font-size: 14px;
  display: flex;
  min-height: 25px;
  max-width: 350px;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 14px;
`;

export const CurrentCity = styled.div`
  font-size: 28px;
  word-wrap: break-word;
`;

export const CurrentCountry = styled.div`
   font-size: 18px;
`;
