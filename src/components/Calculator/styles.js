import styled from 'styled-components';
import {
  BORDER_SIZE_STYLE,
  CALCULATOR_BORDER_COLOR,
  HUNDRED_PERCENT_WIDTH,
  HUNDRED_PERCENT_HEIGHT,
  FIFTEEN_PX_PADDING,
} from '@constants/StyleConstants';

const CalculatorWrapper = styled.div`
  padding-right: ${FIFTEEN_PX_PADDING};
  height: ${HUNDRED_PERCENT_HEIGHT};
  width: ${HUNDRED_PERCENT_WIDTH};
  border-right: ${BORDER_SIZE_STYLE} ${CALCULATOR_BORDER_COLOR};
`;

export default CalculatorWrapper;
