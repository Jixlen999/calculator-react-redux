import styled from 'styled-components';
import { HEADER_FONT_SIZE, LOGO_FONT_SIZE, HEADER_FONT_WEIGHT } from '@constants/StyleConstants';
import { HEADER_COLOR } from '@constants/Theme';

export const HeaderWrapper = styled.div`
  height: 10%;
  width: 100%;
  padding: 15px;
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
