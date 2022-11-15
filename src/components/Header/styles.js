import styled from 'styled-components';
import {
  HEADER_FONT_SIZE,
  FIFTEEN_PX_PADDING,
  HUNDRED_PERCENT_WIDTH,
  LOGO_FONT_SIZE,
  HEADER_FONT_WEIGHT,
  HEADER_HEIGHT,
} from '@constants/StyleConstants';
import { HEADER_COLOR } from '@constants/Theme';

export const HeaderWrapper = styled.div`
  height: 10vh;
  width: ${HUNDRED_PERCENT_WIDTH};
  padding: ${FIFTEEN_PX_PADDING};
  background-color: ${HEADER_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${HEADER_FONT_SIZE};
  font-weight: ${HEADER_FONT_WEIGHT};
`;

export const Logo = styled.h1`
  font-size: ${LOGO_FONT_SIZE};
  font-weight: ${HEADER_FONT_WEIGHT};
  color: #ececec;
`;
