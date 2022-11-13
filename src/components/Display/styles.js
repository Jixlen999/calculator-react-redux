import styled from 'styled-components';
import { DISPLAY_FONT_SIZE, DISPLAY_EXPRESSION_SIZE, BORDER_SIZE_STYLE } from '@constants/StyleConstants';

export const DisplayWrapper = styled.div`
  min-height: 15%;
  padding: 15px;
  text-align: right;
  border-bottom: ${BORDER_SIZE_STYLE} #717171;
`;
export const DisplayText = styled.p`
  font-size: ${DISPLAY_FONT_SIZE};
  font-weight: 500;
`;
export const ExpressionText = styled.p`
  font-size: ${DISPLAY_EXPRESSION_SIZE};
`;
