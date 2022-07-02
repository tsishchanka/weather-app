import styled from 'styled-components';

interface Props {

}

export const InputContainer = styled.div<Props>`
  display: flex;
  justify-content: space-around;
  max-width: 480px;
  color: ${({ theme }) => theme.color.white };
  padding: 5px;
  margin: 0 auto;
  @media (max-width: 400px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

export const InputWrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  margin: 10px
;  max-width: 390px;
    .icon{
      cursor: pointer;
      transition: ease-out;
      &:hover {
        transform: scale(1.2);
      }
    }
    @media (max-width: 650px) {
    max-width: 300px;
  }
`;

export const WeatherSettings = styled.div<Props>`
  display: flex;
  justify-content: center;
  max-height: 80px;
`;



export const SearchInput = styled.input<Props>`
  outline: none;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  width: 320px;
  height: 25px;
  margin: 0 5px 0;
  text-transform: capitalize;
  &:focus {
    border-color: ${({ theme }) => theme.color.orange};
}
`;

export const WeatherButton = styled.button<Props>`
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  margin: 5px;
  cursor: pointer;

  color: ${({ theme }) => theme.color.white};
  &:hover {
    color: ${({ theme }) => theme.color.orange};
`;
