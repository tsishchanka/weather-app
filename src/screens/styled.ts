import styled from 'styled-components';

interface Props {

}

export const Container = styled.div<Props>`
  background-color: ${({ theme }) => theme.color.secondary};
`;
