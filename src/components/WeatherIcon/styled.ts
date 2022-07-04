import styled from 'styled-components';

interface Props {
  maxWidth: string;
}

export const Img = styled.img<Props>`
  max-width: ${props => props.maxWidth ? props.maxWidth : '65px'};
`;
