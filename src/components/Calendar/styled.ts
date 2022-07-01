import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 800px;
  margin: 50px auto;
`;

export const CalendarInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

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
`;

export const GoogleCalendarInfo = styled.div`
  margin: 25px 0 0;
`;

export const GoogleCalendarInfoItem = styled.div`
   display: flex;
   margin: 28px 0;
`;

export const InfoItemTime = styled.div`
  background-color: ${({ theme }) => theme.color.gray};
  font-size: 12px;
  min-height: 25px;
  min-width: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;

export const InfoItemText = styled.div`
  font-size: 14px;
  display: flex;
  min-height: 25px;
  max-width: 350px;
    align-items: center;

  justify-content: center;
`;



export const CurrentCity = styled.div`
  font-size: 28px;
`;

export const CurrentCountry = styled.div`
   font-size: 18px;
`;
