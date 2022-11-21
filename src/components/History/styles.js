import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  width: ${({ theme }) => theme.width[3]}%;
  text-align: center;
  visibility: ${(props) => (props.isShown ? 'visible' : 'hidden')};
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[3]}px;
  margin-bottom: ${({ theme }) => theme.margin[1]}%;
`;

export const Expression = styled.p`
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  margin-bottom: ${({ theme }) => theme.margin[0]}%;
`;
export const ExpressionsWrapper = styled.div`
  height: ${({ theme }) => theme.height[3]}vh;
  overflow-y: auto;
  margin-bottom: ${({ theme }) => theme.margin[2]}px;
`;
