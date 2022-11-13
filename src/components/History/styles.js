import styled from 'styled-components';
import { HISTORY_HEADING_SIZE, HISTORY_EXPRESSION_SIZE } from '@constants/StyleConstants';

export const HistoryWrapper = styled.div`
  width: 100%;
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
  height: 70vh;
  overflow-y: auto;
  margin-bottom: 20px;
`;
