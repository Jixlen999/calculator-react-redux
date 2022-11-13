import styled from 'styled-components';
import {
  HISTORY_HEADING_SIZE,
  HUNDRED_PERCENT_WIDTH,
  HISTORY_EXPRESSION_SIZE,
  EXPRESSION_HEIGHT,
} from '@constants/StyleConstants';

export const HistoryWrapper = styled.div`
  width: ${HUNDRED_PERCENT_WIDTH};
  text-align: center;
  visibility: ${(props) => (props.isShown ? 'visible' : 'hidden')};
`;

export const Heading = styled.h2`
  font-size: ${HISTORY_HEADING_SIZE};
  margin-bottom: 5%;
`;

export const Expression = styled.p`
  font-size: ${HISTORY_EXPRESSION_SIZE};
  margin-bottom: 2%;
`;
export const ExpressionsWrapper = styled.div`
  height: ${EXPRESSION_HEIGHT};
  overflow-y: auto;
  margin-bottom: 20px;
`;
