import styled from 'styled-components';
import { HUNDRED_PERCENT_WIDTH, FIFTEEN_PX_PADDING, HUNDRED_PERCENT_HEIGHT } from '@constants/StyleConstants';

const HomeWrapper = styled.div`
  display: flex;
  padding: ${FIFTEEN_PX_PADDING};
  width: ${HUNDRED_PERCENT_WIDTH};
  height: ${HUNDRED_PERCENT_HEIGHT};
  overflow: hidden;
`;

export default HomeWrapper;
