import styled from 'styled-components';
import theme from '@src/theme';

export const HistoryWrapper = styled.div`
  width: ${theme.width[3]}%;
  text-align: center;
  visibility: ${(props) => (props.isShown ? 'visible' : 'hidden')};
`;

export const Heading = styled.h2`
  font-size: ${theme.fontSize[3]}px;
  margin-bottom: ${theme.margin[1]}%;
`;

export const Expression = styled.p`
  font-size: ${theme.fontSize[2]}px;
  margin-bottom: ${theme.margin[0]}%;
`;
export const ExpressionsWrapper = styled.div`
  height: ${theme.height[3]}vh;
  overflow-y: auto;
  margin-bottom: ${theme.margin[2]}px;
`;
