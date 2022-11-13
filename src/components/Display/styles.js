import styled from 'styled-components';
import {
  DISPLAY_FONT_SIZE,
  FIFTEEN_PX_PADDING,
  DISPLAY_EXPRESSION_SIZE,
  BORDER_SIZE_STYLE,
  CALCULATOR_BORDER_COLOR,
} from '@constants/StyleConstants';

export const DisplayWrapper = styled.div`
  min-height: 15%;
  padding: ${FIFTEEN_PX_PADDING};
  text-align: right;
  border-bottom: ${BORDER_SIZE_STYLE} ${CALCULATOR_BORDER_COLOR};
`;
export const DisplayText = styled.p`
  font-size: ${DISPLAY_FONT_SIZE};
  font-weight: 500;
`;
export const ExpressionText = styled.p`
  font-size: ${DISPLAY_EXPRESSION_SIZE};
`;
