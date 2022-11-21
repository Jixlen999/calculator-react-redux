import styled from 'styled-components';

const Error = styled.h1`
  padding: ${({ theme }) => theme.padding[3]}px;
  font-size: ${({ theme }) => theme.fontSize[5]};
  text-align: center;
`;

export default Error;
