import styled from 'styled-components';
import theme from '@src/theme';

const { width, fontSize, margin, height } = theme;

export const HistoryWrapper = styled.div`
  width: ${width[3]}%;
  text-align: center;
  visibility: ${(props) => (props.isShown ? 'visible' : 'hidden')};
`;

export const Heading = styled.h2`
  font-size: ${fontSize[3]}px;
  margin-bottom: ${margin[1]}%;
`;

export const Expression = styled.p`
  font-size: ${fontSize[2]}px;
  margin-bottom: ${margin[0]}%;
`;
export const ExpressionsWrapper = styled.div`
  height: ${height[3]}vh;
  overflow-y: auto;
  margin-bottom: ${margin[2]}px;
`;
