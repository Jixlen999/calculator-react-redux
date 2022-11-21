import styled from 'styled-components';

export const PanelWrapper = styled.div`
  padding: ${({ theme }) => theme.padding[2]}px;
`;

export const Heading = styled.h2`
  margin: ${({ theme }) => theme.margin[2]}px 0;
  font-size: ${({ theme }) => theme.fontSize[5]}px;
`;
