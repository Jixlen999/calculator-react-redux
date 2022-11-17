import styled from 'styled-components';
import theme from '@src/theme';

const { padding, fontSize } = theme;

const Error = styled.h1`
  padding: ${padding[3]}px;
  font-size: ${fontSize[5]};
  text-align: center;
`;

export default Error;
